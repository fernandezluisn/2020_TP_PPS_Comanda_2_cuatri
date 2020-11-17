import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/servicios/mesas.service';

@Component({
  selector: 'app-home-mozo',
  templateUrl: './home-mozo.page.html',
  styleUrls: ['./home-mozo.page.scss'],
})
export class HomeMozoPage implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
  }

  public HacerPedido() {
    this.router.navigate(['/hacer-pedido']);
  }
  public ConfirmarPago() {
    this.router.navigate(['/confirmar-pago']);
  }
  public ConfirmarPedidos() {
    this.router.navigate(['/aceptar-pedido']);
  }
  public TerminarPedidos() {
    this.router.navigate(['/pedidos-listos']);
  }
  public verConsultas(){
    this.router.navigate(['/consultas']);
  }

  encuesta(){
    this.router.navigate(['/encuesta-empleado']);
  }



  salir(){
    this.auth.LogOut();
    this.router.navigate(['log-in']);
  }
}
