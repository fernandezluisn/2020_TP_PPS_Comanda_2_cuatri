import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

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
