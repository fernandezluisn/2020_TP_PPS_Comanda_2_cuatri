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
import { MesaClienteService } from 'src/app/servicios/mesa-cliente.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { MesaCliente } from 'src/app/interfaces/mesa-cliente';

@Component({
  selector: 'app-mesa-cliente',
  templateUrl: './mesa-cliente.page.html',
  styleUrls: ['./mesa-cliente.page.scss'],
})
export class MesaClientePage implements OnInit {


  public usuario: any;
  mesaCliente:MesaCliente;
  constructor(private platform: Platform,private route:Router,public alert: AlertService, private auth: AuthService,
    public modalController: ModalController,   private popoverCtrl: PopoverController, private spinnerService: SpinnerService,
    private consultaService: ConsultaService, private fcmService: FcmService, private bda:MesaClienteService,
    private barcodeScanner: BarcodeScanner,) { 

  this.usuario = JSON.parse(localStorage.getItem('usuario'));

  let idMesaCliente = JSON.parse(localStorage.getItem('mesaClienteID'));
    
    
    this.bda.devolverListadoMesas().subscribe(lista=>{
      lista.filter(elem=>{
        if(elem.id==idMesaCliente)
        this.mesaCliente=elem
      })      
    })


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
    
    
    this.barcodeScanner.scan().then(resultado => {
      if(resultado.text==this.mesaCliente.qrMesa){
        this.route.navigate(["gestiones"]);
        this.spinnerService.showSpinner();
      }else{
        this.alert.mensaje("Error", "Esa no es su mesa");
      }
    })
    
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
  
 
  pedirCuenta()
  {
    if(localStorage.getItem('Sonido') == 'true')
    {
      let audio = new Audio();
      audio.src = '../assets/click.m4a';
      audio.load();
      audio.play();
    }
  this.route.navigate(['/cuenta-cliente']);
  }

  propina(){    
    if(this.mesaCliente.propina==null || this.mesaCliente.propina==undefined)
    this.route.navigate(['propina']);
    else{
      this.alert.mensaje("Cuidado", "Usted ya ingresó el monto de la propina, lo está ingresando nuevamente");
      this.route.navigate(['propina']);
    }
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);


  }


}
