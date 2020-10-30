import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home-cocina',
  templateUrl: './home-cocina.page.html',
  styleUrls: ['./home-cocina.page.scss'],
})
export class HomeCocinaPage implements OnInit {

  constructor(
    private route: Router,
    private platform:Platform 
  ) { }

  ngOnInit(

  ) {
  }

  Mover(lugar){
    this.route.navigate([lugar])
  }


}
