import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-mesa-cliente',
  templateUrl: './mesa-cliente.page.html',
  styleUrls: ['./mesa-cliente.page.scss'],
})
export class MesaClientePage implements OnInit {

  constructor(private platform: Platform, private route:Router, private auth:AuthService) { }

  ngOnInit() {
    //this.platform.isLandscape();
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

}
