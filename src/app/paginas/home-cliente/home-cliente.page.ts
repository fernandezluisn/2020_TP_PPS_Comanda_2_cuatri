import { MesaCliente } from './../../interfaces/mesa-cliente';
import { Espera } from './../../interfaces/reserva';
import { Pedido } from 'src/app/interfaces/pedido';
import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Mesa } from './../../interfaces/mesa';
import { Reserva } from 'src/app/interfaces/reserva';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { SpinerService } from 'src/app/servicios/spiner.service';
import { AlertService } from 'src/app/servicios/alert.service';

@Component({ 
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage {
  public mesas: Mesa[];
  public reservas: Reserva[];
  public listaEspera: Espera[];
  public mesasClientes: MesaCliente[];
  public usuario: any;
  private pedidos = [];
  cliente;
  chat =false;
  constructor(private alert: AlertService, private spiner: SpinerService, private barcodeScanner: BarcodeScanner, private route: Router,
    private clienteService:AuthService) {
    this.cliente = JSON.parse(localStorage.getItem('usuario')); 
    console.log(this.cliente);
    this.clienteService.obtenerCliente(this.cliente.uid).subscribe((resp:any) =>{
      resp.forEach(user => {
        console.log(user.estado);
          this.cliente = user;              
      });        
    });


  }
  
  public async scanearEspera() {
    if(localStorage.getItem('Sonido') == 'true')
      {
        let audio = new Audio();
        audio.src = '../assets/click.m4a';
        audio.load();
        audio.play();
      }
    let sp = await this.spiner.GetAllPageSpinner("");
    sp.present();
    this.barcodeScanner.scan().then(resultado => {
      let qrValido = false;
      let mesaOcupada = false;

       if(resultado.text == "ListaDeEspera"){
         qrValido = true;
         this.cliente.estado = "EnListaDeEspera"
         this.clienteService.ModificarUsuario(this.cliente);
         this.alert.mensaje('Bienvenido!', 'Usted se encuentra en la lista de espera');

       }
      if (!qrValido) {
        this.alert.mensaje('Atención!', 'El QR escaneado no es válido');
      }
      sp.dismiss();

    });
  }



}
