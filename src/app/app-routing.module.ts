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
  { path: 'alta-mesa', loadChildren: './paginas/admin-comercio/admin-comercio.module#AdminComercioPageModule' },
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
  { path: 'propina/:idMesaCliente', loadChildren: './paginas/propina/propina.module#PropinaPageModule' },
  { path: 'mesa-cliente', loadChildren: './paginas/mesa-cliente/mesa-cliente.module#MesaClientePageModule' },
  { path: 'encuesta-supervisor', loadChildren: './paginas/encuesta-supervisor/encuesta-supervisor.module#EncuestaSupervisorPageModule' },
  { path: 'encuesta-empleado', loadChildren: './paginas/encuesta-empleado/encuesta-empleado.module#EncuestaEmpleadoPageModule' },
  { path: 'graficos', loadChildren: './paginas/graficos/graficos.module#GraficosPageModule' },
  { path: 'reservas', loadChildren: './paginas/reservas/reservas.module#ReservasPageModule' },
  { path: 'respuesta-reservas', loadChildren: './paginas/respuesta-reservas/respuesta-reservas.module#RespuestaReservasPageModule' },
  { path: 'encuesta-cliente', loadChildren: './paginas/encuesta-cliente/encuesta-cliente.module#EncuestaClientePageModule' },
  { path: 'consulta-mozo', loadChildren: './paginas/consulta-mozo/consulta-mozo.module#ConsultaMozoPageModule' },


<<<<<<< HEAD

 
=======
>>>>>>> e14bc3fe9689632cb826636ee19ed280d5d58692
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


