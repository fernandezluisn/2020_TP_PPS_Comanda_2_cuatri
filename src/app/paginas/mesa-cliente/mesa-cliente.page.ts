import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/servicios/alert.service';
import { SpinerService } from 'src/app/servicios/spiner.service';

@Component({
  selector: 'app-mesa-cliente',
  templateUrl: './mesa-cliente.page.html',
  styleUrls: ['./mesa-cliente.page.scss'],
})
export class MesaClientePage implements OnInit {

  constructor(private platform: Platform, private route:Router, private auth:AuthService, private alert:AlertService) { }

  ngOnInit() {
    //this.platform.isLandscape();
  }

realizarPedido()
{
  this.alert.mensaje('','Realizar pedido')
}
  escanearQr()
  {
    this.alert.mensaje('','escanear')
  }
  consultarMozo()
  {
    this.alert.mensaje('','consulta')
  }
  jugar()
  {
    this.alert.mensaje('','jugar')
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
 
  pedirCuenta()
  {
    this.alert.mensaje('','pedir cuenta')
  }

  propina(){
    //falta completar esto

    //this.route.navigate(['propina/'+ this.idMesaCliente]);
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

}
