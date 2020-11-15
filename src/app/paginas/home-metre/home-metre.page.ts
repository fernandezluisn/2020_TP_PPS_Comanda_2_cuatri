import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { FcmService } from 'src/app/servicios/fcm.service';
import { DatePipe } from '@angular/common';
import { Reserva } from 'src/app/interfaces/reserva';
import { MesasService } from 'src/app/servicios/mesas.service';
import { Mesa } from 'src/app/interfaces/mesa';

@Component({
  selector: 'app-home-metre',
  templateUrl: './home-metre.page.html',
  styleUrls: ['./home-metre.page.scss'],
})
export class HomeMetrePage implements OnInit {

  fecha=new Date();
  mesas:Mesa[];

  clientesEnEspera = [];
  clientes;
  cantClientesEnEspera = 100;
  constructor(private mesaService: MesasService, private reservasService: ReservasService, private authService: AuthService, private route:Router,
     private alertService: AlertService, private reservaService:ReservasService, private fcmService: FcmService, public datePipe: DatePipe,) {
       this.fcmService.SuscribirANotificacion('notificacionListaEspera')
    this.clientesEnEspera = [];

    this.mesaService.getMesas().subscribe(mesas => { this.mesas = mesas; 
      this.chequearReservas();

    });
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
     this.alertService.mensaje("", "Nuevo Cliente");
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

  salir(){
    this.authService.LogOut();
    this.route.navigate(['log-in']);
  }

  chequearReservas(){
      
    let fech1=this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
    let fech2=this.datePipe.transform(this.fecha, 'yyyy-MM-dd');
    this.fecha.setMinutes(this.fecha.getMinutes()-40);
    let resD:Reserva[]=new Array();      
    
    this.reservaService.getReservas().subscribe(list=>{
      list.filter(res=>{
        if(res.fecha==fech1 && res.estado=="confirmada"){
          resD.push(res);
        }else if(Number(Date.parse( res.fecha2))<Number(Date.parse( fech2)) && res.estado!="expirada"){
          res.estado="expirada";
          this.reservaService.updateReserva(res);
        }
      })

      resD.forEach(resDia=>{
        let hor=new Date(resDia.fecha+" "+resDia.hora);          
        if(hor>this.fecha){
          this.mesas.filter(mesa=>{
            if(mesa.numero==resDia.mesa.numero && mesa.estado=="Vacia" && resDia.situacion=="a reservar"){
              mesa.estado="Reservada";              
              this.mesaService.actualizarMesa(mesa);
              resDia.situacion="hecha";
              resDia.mesa=mesa;
              this.reservaService.updateReserva(resDia);
              this.fcmService.enviarMensaje("Mesa"+mesa.numero, "Le informamos que se encuentra reservada la mesa "+mesa.numero, 'notificacionListaEspera');
            }else if(mesa.numero==resDia.mesa.numero && mesa.estado=="Ocupada" && resDia.situacion=="a reservar"){
              this.fcmService.enviarMensaje("Mesa"+mesa.numero, "Le informamos que se encuentra reservada la mesa "+mesa.numero+", debe desocuparla en un plazo menor a 40 minutos.", 'notificacionListaEspera');

            }
          })
        }
      })
    })
    
  }

}
