import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-consulta-mozo',
  templateUrl: './consulta-mozo.page.html',
  styleUrls: ['./consulta-mozo.page.scss'],
})
export class ConsultaMozoPage implements OnInit {
  public consulta;
  constructor(private modalControler:PopoverController) {
    
  }

  ngOnInit() {}

  cancelar(){
    this.modalControler.dismiss();
  }
  enviar(){
    this.modalControler.dismiss(this.consulta);
  }
}
