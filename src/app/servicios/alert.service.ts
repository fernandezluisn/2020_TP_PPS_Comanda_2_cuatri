import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController,
    private route: Router) { }

  async mensaje(titulo, mensaje) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      translucent: true,
      buttons: [
        {
          text: 'Aceptar'
        }
      ]
    });
    await alert.present();
  }}
