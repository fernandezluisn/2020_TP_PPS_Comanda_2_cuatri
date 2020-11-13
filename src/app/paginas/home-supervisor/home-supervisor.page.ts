import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home-supervisor',
  templateUrl: './home-supervisor.page.html',
  styleUrls: ['./home-supervisor.page.scss'],
})
export class HomeSupervisorPage implements OnInit {

  constructor(private platform: Platform, private route:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  Mover(endpoint){
    this.route.navigate([endpoint])
  }

  Encuesta(){
    this.route.navigate(['encuesta-supervisor'])
  }

  EncuestaCliente(){
    this.route.navigate(['graficos-cliente'])
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

}
