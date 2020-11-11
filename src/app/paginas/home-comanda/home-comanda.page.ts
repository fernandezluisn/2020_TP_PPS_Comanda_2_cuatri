import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home-comanda',
  templateUrl: './home-comanda.page.html',
  styleUrls: ['./home-comanda.page.scss'],
})
export class HomeComandaPage implements OnInit {

  constructor(
    private route: Router,
    private platform:Platform,
    private auth:AuthService   
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
