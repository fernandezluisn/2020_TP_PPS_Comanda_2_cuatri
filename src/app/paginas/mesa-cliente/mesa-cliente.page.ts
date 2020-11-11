import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
=======
import { Platform,AlertController } from '@ionic/angular';

import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/servicios/alert.service';
import { SpinerService } from 'src/app/servicios/spiner.service';
>>>>>>> fd80f0c85c0ce8cfe60dce3e7ae9843ae19e04ee

@Component({
  selector: 'app-mesa-cliente',
  templateUrl: './mesa-cliente.page.html',
  styleUrls: ['./mesa-cliente.page.scss'],
})
export class MesaClientePage implements OnInit {

<<<<<<< HEAD
  constructor(private platform: Platform, private route:Router, private auth:AuthService) { }
=======
  public usuario: any;
  constructor(private platform: Platform,private route:Router,public alert: AlertService) { 

  this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }
>>>>>>> fd80f0c85c0ce8cfe60dce3e7ae9843ae19e04ee

  ngOnInit() {
    //this.platform.isLandscape();
  }

<<<<<<< HEAD
  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
=======
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
>>>>>>> fd80f0c85c0ce8cfe60dce3e7ae9843ae19e04ee
  }

}
