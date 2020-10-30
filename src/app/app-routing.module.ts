import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SepararGuard } from './guard/separar.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate:[SepararGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'log-in', loadChildren: './paginas/log-in/log-in.module#LogInPageModule' },
  { path: 'home-comanda', loadChildren: './paginas/home-comanda/home-comanda.module#HomeComandaPageModule' },
  { path: 'alta-cliente', loadChildren: './paginas/alta-cliente/alta-cliente.module#AltaClientePageModule' },
  { path: 'home-cliente', loadChildren: './paginas/home-cliente/home-cliente.module#HomeClientePageModule' },   
  { path: 'home-admin', loadChildren: './paginas/home-admin/home-admin.module#HomeAdminPageModule' },
  { path: 'admin-comercio', loadChildren: './paginas/admin-comercio/admin-comercio.module#AdminComercioPageModule' },
  { path: 'alta-producto', loadChildren: './paginas/alta-producto/alta-producto.module#AltaProductoPageModule' },
  { path: 'home-cocina', loadChildren: './paginas/home-cocina/home-cocina.module#HomeCocinaPageModule' },
  { path: 'aceptar-cliente', loadChildren: './paginas/aceptar-cliente/aceptar-cliente.module#AceptarClientePageModule' },
  { path: 'alta-supervisor', loadChildren: './paginas/alta-supervisor/alta-supervisor.module#AltaSupervisorPageModule' },
  { path: 'alta-empleado', loadChildren: './paginas/alta-empleado/alta-empleado.module#AltaEmpleadoPageModule' },
  { path: 'home-metre', loadChildren: './paginas/home-metre/home-metre.module#HomeMetrePageModule' },
  { path: 'home-supervisor', loadChildren: './paginas/home-supervisor/home-supervisor.module#HomeSupervisorPageModule' },
  { path: 'home-delivery', loadChildren: './paginas/home-delivery/home-delivery.module#HomeDeliveryPageModule' },
  { path: 'home-mozo', loadChildren: './paginas/home-mozo/home-mozo.module#HomeMozoPageModule' },
  { path: 'home-cliente', loadChildren: './paginas/home-cliente/home-cliente.module#HomeClientePageModule' },   
  { path: 'home-admin', loadChildren: './paginas/home-admin/home-admin.module#HomeAdminPageModule' },

 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}