import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FcmService } from 'src/app/servicios/fcm.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.page.html',
  styleUrls: ['./preparacion.page.scss'],
})
export class PreparacionPage implements OnInit {

  usuario;
  pedidosProdlista = [];
  constructor(private clienteService: AuthService, private fcmService: FcmService, private spinnerService: SpinnerService,
    private alertService: AlertService, private pedidosService: PedidosService) { 
    this.usuario = JSON.parse(localStorage.getItem('usuario')); 

  }

  ngOnInit() {
    this.clienteService.obtenerCliente(this.usuario.uid).subscribe((resp:any) =>{
          resp.forEach(user => {
            console.log(user.estado);
            var id = this.usuario.id;
              this.usuario = user;      
              this.usuario.id = id         
          });  
        })

        console.log(this.usuario)

        this.pedidosService.getPedidoProductos().subscribe(async (pedidos) => {
            console.log(pedidos);
          this.pedidosProdlista = pedidos
        })  
        console.log(this.pedidosProdlista);
      
      }

      prepararProducto(pedido){

        pedido.estado = "listo";
        this.pedidosService.updatePedidoProducto(pedido.id, pedido);
        this.fcmService.enviarMensaje("Producto Listo", "nuevo producto listo", "notificacionMozo");

      }

}
