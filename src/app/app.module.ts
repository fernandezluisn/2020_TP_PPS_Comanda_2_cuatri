import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts';

import { DatePipe } from '@angular/common';

import { firebaseConfig } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import {ConsultaMozoPageModule} from '../app/paginas/consulta-mozo/consulta-mozo.module'

import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ConsultaMozoPageModule,
    HttpClientModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Vibration,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue:{}},
    Camera,
    EmailComposer,
    FCM,
    ChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
