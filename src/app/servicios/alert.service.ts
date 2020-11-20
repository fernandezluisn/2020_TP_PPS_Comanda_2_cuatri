import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Vibration } from '@ionic-native/vibration/ngx';


@Injectable({
  providedIn: 'root'
})
export class AlertService {


  constructor(private alertController: AlertController,
    private route: Router,
    private vibration: Vibration) { }

  async mensaje(titulo, mensaje) {
    this.vibration.vibrate(1222);
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

  }


  async clienteListaEspera() {
    this.vibration.vibrate(422);
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: 'Desea agregarse a la lista de espera?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });
    await alert.present();
  }

  async clienteComiendo() {
    this.vibration.vibrate(422);
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: 'Espero que esté disfrutando de su pedido. Desea completar una breve encuesta acerca de su experiencia?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (data) => {
            data = ''
            this.route.navigate(['/encuesta-cliente']);
          }
        }
      ]
    });
    await alert.present();
  }
}

