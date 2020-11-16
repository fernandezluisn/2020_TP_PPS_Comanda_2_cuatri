import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

import { Platform,AlertController, PopoverController } from '@ionic/angular';

import { AlertService } from 'src/app/servicios/alert.service';
import { SpinerService } from 'src/app/servicios/spiner.service';
import { ModalController } from '@ionic/angular';
import { ConsultaMozoPage } from '../consulta-mozo/consulta-mozo.page';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { ConsultaService } from 'src/app/servicios/consulta.service';
import { Consulta } from 'src/app/interfaces/Consulta';
import { FcmService } from 'src/app/servicios/fcm.service';

@Component({
  selector: 'app-mesa-cliente',
  templateUrl: './mesa-cliente.page.html',
  styleUrls: ['./mesa-cliente.page.scss'],
})
export class MesaClientePage implements OnInit {


  public usuario: any;
  constructor(private platform: Platform,private route:Router,public alert: AlertService, private auth: AuthService,
    public modalController: ModalController,   private popoverCtrl: PopoverController, private spinnerService: SpinnerService,
    private consultaService: ConsultaService, private fcmService: FcmService) { 

  this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit() {
    //this.platform.isLandscape();
  }

realizarPedido()
{
  let audio = new Audio();
  audio.src = '../assets/click.m4a';
  audio.load();
  audio.play();
  this.route.navigate(['hacer-pedido'])
}
  escanearQr()
  {
    this.alert.mensaje('','escanear')
  }
  
  async consultarMozo()
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
          this.consultaService.createConsulta(new Consulta("Mesa1",data.data,"Pendiente"));
          //TODO -> PUSH NOTIFICATION.
          this.spinnerService.hideSpinner();
          this.alert.mensaje("", "Se ha enviado su consulta.");
          this.fcmService.enviarMensaje("Nueva Consulta", "Mesa1"+data.data, "mozo")
        }else{
             this.alert.mensaje("", "Consulta Cancelada");
          }
        })  }
  jugar()
  {
    //falta completar esto
    //if(this.mesacliente.juegoDescuento==null)
    //this.route.navigate(["juego/"+this.idMesaCliente]);
    /*else{
      this.alert.mensaje('','Solo puede intentar el descuento una vez');
    }*/
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
