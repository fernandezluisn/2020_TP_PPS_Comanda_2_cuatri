import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { FcmService } from 'src/app/servicios/fcm.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { MesasService } from 'src/app/servicios/mesas.service';

@Component({
  selector: 'app-aceptar-pedido',
  templateUrl: './aceptar-pedido.page.html',
  styleUrls: ['./aceptar-pedido.page.scss'],
})
export class AceptarPedidoPage implements OnInit {

  constructor(private fcmService: FcmService, private router: Router, private pedidoService: PedidosService, 
    private spinnerService: SpinnerService, private alertService: AlertService, private mesaService: MesasService) { }

    pedidos;
    mesas;
    pedidosProducto;

  ngOnInit() {
    

    this.mesaService.getMesas().subscribe(mesas => { this.mesas = mesas; 
    })

    this.pedidoService.getPedidosProductos().subscribe(pedidosProducto => { this.pedidosProducto = pedidosProducto; 
    })



    this.pedidoService.getPedidos().subscribe(pedidos => { this.pedidos = pedidos; 
     console.log(this.pedidos);
        pedidos.forEach(pedido => {
           this.pedidoService.getPedidosProductosPorPedido(pedido.id).then(pedidosProducto => {
             console.log(pedidosProducto);
             pedido.productos = pedidosProducto;
             })


          })
     
      });
  }

  confirmarPedido(pedido){
   
    pedido.estado = "confirmado";

    this.pedidoService.updatePedido(pedido.id, pedido);


    //TODO -> SEND FCM POR TIPO DE PEDIDO PRODUCTO.
    this.pedidoService.getPedidosProductosPorPedido(pedido.id).then(pedidosProducto => {
      pedidosProducto.forEach(pedidoProducto => {
         pedidoProducto.estado = "confirmado";
         this.pedidoService.updatePedidoProducto(pedidoProducto.id, pedidoProducto)
         });
      })

  }


  }



