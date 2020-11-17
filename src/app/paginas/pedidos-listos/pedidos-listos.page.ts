import { Component, OnInit } from '@angular/core';
import { FcmService } from 'src/app/servicios/fcm.service';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { MesasService } from 'src/app/servicios/mesas.service';

@Component({
  selector: 'app-pedidos-listos',
  templateUrl: './pedidos-listos.page.html',
  styleUrls: ['./pedidos-listos.page.scss'],
})
export class PedidosListosPage implements OnInit {


  pedidosMostrar = [];
    mesas;
    pedidosProducto;
  constructor(private fcmService: FcmService, private router: Router, private pedidoService: PedidosService, 
    private spinnerService: SpinnerService, private alertService: AlertService, private mesaService: MesasService) { }




  ngOnInit() {

    this.pedidoService.getPedidos().subscribe(pedidos => { 


         pedidos.forEach(pedido => {

          if(pedido.estado != "sconfirmar" && pedido.estado != "cerrado" && pedido.estado != "entregado")
          {
           var conPendientes = 0;
           pedido.estado = "listo";
            this.pedidoService.getPedidosProductosPorPedido(pedido.id).then(pedidosProducto => {
              console.log(pedidosProducto);
             // pedido.productos = pedidosProducto;
              pedidosProducto.forEach(element => {
                console.log(element);
                    if (element.estado != "listo")
                      conPendientes = 1;
                  });
                  console.log("termine"+ conPendientes);

                  
              if(conPendientes != 0)
              pedido.estado = "En Preparacion"

              })
          
                this.pedidosMostrar.push(pedido);
            }
           })     
       });  
  }


  servir(pedido){
    
  pedido.estado = "entregado";
  this.pedidoService.updatePedido(pedido.id, pedido);
  this.spinnerService.showSpinner();
  this.alertService.mensaje("", "Se ha entregado el pedido!");
  this.spinnerService.hideSpinner();
  this.router.navigate(['/home-mozo']);
}

}
