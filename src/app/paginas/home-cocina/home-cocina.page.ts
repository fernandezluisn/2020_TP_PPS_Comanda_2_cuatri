import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home-cocina',
  templateUrl: './home-cocina.page.html',
  styleUrls: ['./home-cocina.page.scss'],
})
export class HomeCocinaPage implements OnInit {

  constructor(
    private route: Router,
    private platform:Platform , private auth:AuthService
  ) { }

  ngOnInit(

  ) {
  }

  Mover(lugar){
    this.route.navigate([lugar])
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }


}
