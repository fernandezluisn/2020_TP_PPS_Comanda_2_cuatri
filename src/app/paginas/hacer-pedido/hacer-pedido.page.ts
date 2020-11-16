import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/interfaces/producto';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoProducto } from 'src/app/interfaces/pedido';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { MesasService } from 'src/app/servicios/mesas.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertService } from 'src/app/servicios/alert.service';

import { Platform,AlertController, PopoverController } from '@ionic/angular';
import { ConsultaMozoPage } from '../consulta-mozo/consulta-mozo.page';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { ConsultaService } from 'src/app/servicios/consulta.service';
import { Consulta } from 'src/app/interfaces/Consulta';
import { FcmService } from 'src/app/servicios/fcm.service';


@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.page.html',
  styleUrls: ['./hacer-pedido.page.scss'],
})
export class HacerPedidoPage implements OnInit {
  public productos: Producto[];
  public cantidad: number;
  direccion:any=false;
  public pedido = {
    comienzo: (new Date()).toString(),
    estado: 'sconfirmar',
    id_mesa_cliente: '',
    'id-mesa': '',
    delivery:false,
    direccion:'',
    foto:'',
    email:''
  };
  public pedidosProductos = [];
  public mesasClientes = [];
  private idUsusario = '';
  private usuario;
  public esMozo: boolean;
  esCliente:boolean;
  constructor(private platform: Platform,private prodServ: ProductosService, private pedidoServ: PedidosService,
    private mesaServ: MesasService, private authServ: AuthService,
    private router: Router, private barcodeScanner: BarcodeScanner, 
    private alertServ: AlertService,private popoverCtrl: PopoverController, private spinnerService: SpinnerService,
    private consultaService: ConsultaService, private fcmService: FcmService)    
    {
    this.prodServ.devolverListadoProductos().subscribe( (data) => {
      this.productos = data;
      // console.log(data);
    });
    this.cantidad = 1;
  }
  async ngOnInit() {
    this.spinnerService.showSpinner();
    this.idUsusario = this.authServ.getUsuario()['id'];
    this.usuario = this.authServ.getUsuario();
    this.pedido.foto = this.usuario['foto'];
    this.pedido.email = this.usuario['mail'];
    this.mesaServ.getMesas().subscribe( (data) => {
      this.mesasClientes = data;
      if (this.usuario.perfil != 'cliente' && this.usuario.perfil != 'anonimo') {
        this.esMozo = true;
      } else {
        this.esMozo = false;
        this.esCliente = this.usuario.perfil == 'cliente';

        for (const item of this.mesasClientes) {
          if (item.idCliente === this.idUsusario && !item.cerrada) {
            this.pedido.id_mesa_cliente = item.id;
            break;
          }
        }
      }
      this.spinnerService.hideSpinner();

    });
  }

  public Agregar(idProd: string) {
    console.log(idProd);
    if (this.cantidad > 0 ) {
        const pedidoProd = {
          id_pedido: this.pedido['id'],
          estado: 'sconfirmar',
          id_producto: idProd,
          id_comanda: '',
          cantidad: this.cantidad
        };
        this.pedidosProductos.push(pedidoProd);
        this.alertServ.mensaje(''+this.cantidad+' productos','agregados')
    }
    console.log(this.pedidosProductos)
    this.cantidad = 1;
  }

  public async TerminarPedido(delivery:boolean=false) {

    if (this.pedidosProductos.length > 0) {
      // console.log(this.pedido.id_mesa_cliente);
      if ((!this.esMozo) || this.pedido.id_mesa_cliente != '' ) {
        this.mesasClientes.forEach(mCliente => {
          if (mCliente.id == this.pedido.id_mesa_cliente) {
            this.pedido['id-mesa'] = mCliente.idMesa;

            
            this.mesaServ.getMesaPorID(mCliente.idMesa).then(mesas => {
              mesas[0].estado = 'esperando pedido';
              this.mesaServ.actualizarMesa(mesas[0]);
            });
          }
        });
        this.pedidoServ.AddPedido(this.pedido).then( (res) => {
          this.pedido['id'] = res['id'];
          // console.log(this.pedido);
          for (const item of this.pedidosProductos) {
            item.id_pedido = res['id'];
            this.pedidoServ.AddPedidoProducto(item).then( (res) => {
              console.log('agregado');
            });
          }
          this.alertServ.mensaje('', 'El pedido se agregó correctamente');
          if ( this.usuario.perfil == 'cliente' || this.usuario.perfil == 'anonimo') {
         
            this.avisarPedidoMozo(this.pedido.id_mesa_cliente);

            this.router.navigate(['/mesa-cliente']);
          } else {
            this.router.navigate(['/mozo-aceptar']);
          }
        });
      } else {
        this.alertServ.mensaje('Alerta:', 'Faltan datos para generar el pedido');
      }
    }

  }
  async avisarPedidoMozo(mesa:string)
  {
    const popover = await this.popoverCtrl.create({
      component: ConsultaMozoPage,
      translucent: true
    });
    popover.present();  
    return popover.onDidDismiss().then(
      (data: any) => {
        console.log(data);
        if(data.data){
          this.spinnerService.showSpinner();
          this.consultaService.createConsulta(new Consulta(mesa,data.data,"Pendiente"));
          //TODO -> PUSH NOTIFICATION.
          this.spinnerService.hideSpinner();
         // this.alertServ.mensaje("", "Se ha enviado su consulta.");
          this.fcmService.enviarMensaje("Nuevo Pedido", mesa+':'+data.data, "mozo")
        }else{
             this.alertServ.mensaje("", "Pedido Cancelado");
          }
        })  
      }

  public BorrarProducto(idProducto: string) {
    console.log(this.pedidosProductos);
    for (const pp of this.pedidosProductos) {
      if (pp.id_producto == idProducto) {
        const index = this.pedidosProductos.indexOf(pp);
        this.pedidosProductos.splice(index, 1);
        break;
      }
    }
  }
  public LeerQR() {
    //MICA agrega lo de poner la cantidad
    this.barcodeScanner.scan().then(resultado => {
      this.productos.forEach(producto => {
        if (producto.qr == resultado.text) {
          this.Agregar(producto.id);
        }
      });
    });
  }
}
