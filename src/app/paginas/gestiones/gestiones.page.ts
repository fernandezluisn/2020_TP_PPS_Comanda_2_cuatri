import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaCliente } from 'src/app/interfaces/mesa-cliente';
import { Pedido } from 'src/app/interfaces/pedido';
import { AlertService } from 'src/app/servicios/alert.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { MesaClienteService } from 'src/app/servicios/mesa-cliente.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-gestiones',
  templateUrl: './gestiones.page.html',
  styleUrls: ['./gestiones.page.scss'],
})
export class GestionesPage implements OnInit {

  idMesaCliente:string;
  mesaCliente:MesaCliente;
  constructor(private route:Router,public alert: AlertService, private bda:MesaClienteService, private auth:AuthService,
    private pedidoServ:PedidosService) { 
    this.idMesaCliente = JSON.parse(localStorage.getItem('mesaClienteID'));

    this.bda.devolverListadoMesas().subscribe(lista=>{
      lista.filter(elem=>{
        if(elem.id==this.idMesaCliente)
        this.mesaCliente=elem
      })
    })
  }

  ngOnInit() {
  }

  jugar()
  {
    
    if(this.mesaCliente.juegoDescuento==null)
    this.route.navigate(["juego"]);
    else{
      this.alert.mensaje('Error','Solo puede intentar el descuento una vez');
    }
  }
  realizarEncuesta()
  {
    let audio = new Audio();
    audio.src = '../assets/click.m4a';
    audio.load();
    audio.play();
    this.alert.mensaje('','Lo enviaremos a hacer una encuesta. Si quiere puede no hacerla')
    this.route.navigate(['encuesta-cliente'])
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

  estado(){
    let ped:Pedido;
    this.pedidoServ.getPedidos().subscribe(lista=>{
      lista.filter(elem=>{
        if(elem.id_mesa_cliente==this.mesaCliente.id){
          ped=elem;
        }
      })
    })
    if(ped.estado=="sconfirmar")
    this.alert.mensaje("","Su pedido aún no ha sido confirmado")
    else if(ped.estado=="confirmado")
    this.alert.mensaje("","Su pedido está siendo elaborado")
    else if(ped.estado=="terminado")
    this.alert.mensaje("","Su pedido ya está listo")
  }

  volver(){
    this.route.navigate(["mesa-cliente"])
  }

}
