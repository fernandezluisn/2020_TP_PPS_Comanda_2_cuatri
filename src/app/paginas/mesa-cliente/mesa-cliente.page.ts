import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mesa-cliente',
  templateUrl: './mesa-cliente.page.html',
  styleUrls: ['./mesa-cliente.page.scss'],
})
export class MesaClientePage implements OnInit {

  constructor(private platform: Platform) { }

  ngOnInit() {
    //this.platform.isLandscape();
  }

}
