import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home-delivery',
  templateUrl: './home-delivery.page.html',
  styleUrls: ['./home-delivery.page.scss'],
})
export class HomeDeliveryPage implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
  }

  Mover(lugar){
    this.router.navigate([lugar]);
  }

  salir(){
    this.auth.LogOut();
    this.router.navigate(['log-in']);
  }

}
