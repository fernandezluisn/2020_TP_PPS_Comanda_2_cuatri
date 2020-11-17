import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AceptarPedidoPage } from './aceptar-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: AceptarPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AceptarPedidoPage]
})
export class AceptarPedidoPageModule {}
