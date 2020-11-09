import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from "./servicios/auth.service";
import { FCM, NotificationData } from '@ionic-native/fcm/ngx';
import { ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent{
  sound;
  showSplash =true;
  notShowSplash=false;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastController: ToastController,
    private publicRouter:Router,
    private fcm: FCM,
        private auth:AuthService
    ) {
      this.sound = true;
    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(4000).subscribe(()=>{this.showSplash=false;})
    });

    this.fcm.getToken().then(
    (token:string) => {
      alert(token)
    }
    )
    
    this.fcm.onNotification().subscribe(data => {
      // console.log(data);
      if (data.wasTapped) {
        alert(data);
        // console.log('Received in background');
        //this.router.navigateByUrl('/list-confirmar-cliente-mesa');
        this.publicRouter.navigate(['/log-in']);
      } else {
        // console.log('Received in foreground');
        //let objetoAuxUno = JSON.stringify(data.title);
        let objetoAuxDos = JSON.stringify(data.body);
        this.presentToast( objetoAuxDos);
      }
    });
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      //header: cabeza,
      message: mensaje,
      //duration: 5000,
      position: 'top',
      color: 'violetaleon',
      translucent: false,
      cssClass: 'toast-noti',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
            toast.dismiss();
          }
        }
      ]
    });
    toast.present();
  }
  home(){
    this.publicRouter.navigate(['/home'])

  }


  LogOut(){
    if(localStorage.getItem('Sonido') == 'true')
    {
      let audio = new Audio();
      audio.src = '../assets/fin.mp3';
      audio.load();
      audio.play();
    }
    this.auth.LogOut();
    this.publicRouter.navigate(['/log-in'])
  }

  sonido(bol){
    this.sound = bol;
    localStorage.setItem('Sonido', bol);
  }
}
