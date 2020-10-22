import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private alertCtrl: ToastController,
    private vibration: Vibration) { }

  public async MostrarErrorSoloLower(messageRecieved: string) {
    console.log('Ocurrio un error:', messageRecieved);
    this.vibration.vibrate(1000);
    const alert = await this.alertCtrl.create({
      message: messageRecieved,
      duration: 2000,
      position: 'bottom'
    });

    alert.present();
  }
}
