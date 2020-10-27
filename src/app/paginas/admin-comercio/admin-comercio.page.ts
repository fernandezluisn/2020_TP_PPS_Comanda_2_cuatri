import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-comercio',
  templateUrl: './admin-comercio.page.html',
  styleUrls: ['./admin-comercio.page.scss'],
})
export class AdminComercioPage implements OnInit {

  altaMesa:boolean;
  tipoMesa:string;
  numMesa:number;
  cantidad:number;

  constructor() { 
    this.altaMesa=true;
  }

  ngOnInit() {
  }

  cambiarAlta(){
    if(this.altaMesa){
      this.altaMesa=false;
    }else{
      this.altaMesa=true;
    }
  }

}
