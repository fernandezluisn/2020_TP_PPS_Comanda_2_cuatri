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
  chat =false;
  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuario')); 
  }

}
