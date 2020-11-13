import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {GraficosClientePage} from './graficos-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: GraficosClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GraficosClientePage]
})
export class GraficosClientePageModule {}
