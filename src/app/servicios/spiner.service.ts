import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinerService {
  constructor(private loadingCtrl: LoadingController) { }

  public async GetAllPageSpinner(messageSpinner) {
    const loader = await this.loadingCtrl.create({
      spinner: null,
      keyboardClose: true,
      message: '<div class="spinner-css"><img src="assets/loading.png"></div>'+messageSpinner+'',
      showBackdrop: false,
      duration:30000,
      cssClass: 'cajaSpinner'
    });

    return loader;
  }
}