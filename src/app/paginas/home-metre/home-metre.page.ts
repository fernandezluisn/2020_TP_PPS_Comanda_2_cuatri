import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home-metre',
  templateUrl: './home-metre.page.html',
  styleUrls: ['./home-metre.page.scss'],
})
export class HomeMetrePage implements OnInit {

  clientesEnEspera = [];
  clientes;
  cantClientesEnEspera = 100;
  constructor(private reservasService: ReservasService, private authService: AuthService, private route:Router) {
    this.clientesEnEspera = [];
   }

  ngOnInit() {

    //Obtengo los clientes en estado lista de espera y asigno la cantidad total en la variable "cantClientesEnEspera" para poder darme cuenta cuando hay un cliente nuevo
    this.authService.getUsuariosListaEspera().subscribe(usuarios=>{
      this.clientesEnEspera = [];
      console.log(usuarios);
      usuarios.forEach(cliente => {
        if( cliente.estado === "EnListaDeEspera" ) {
          this.clientesEnEspera.push(cliente);
      }
    });
    if ( this.clientesEnEspera.length > this.cantClientesEnEspera ) {
      //TODO -> PUSH NOTIFICATION
     alert("nuevoCliente");
    }
    this.cantClientesEnEspera = this.clientesEnEspera.length;
     console.log(this.clientesEnEspera);
    })
  }

  Eliminar(id){
    this.reservasService.EliminarListaEspera(id);
  }
  
  aceptarCliente(cliente){
    cliente.estado = "aceptado";
    this.authService.ModificarUsuario(cliente);
  }

  AltaCliente(){
    this.route.navigate(['alta-cliente'])
  }

}
