import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/reserva';
import { AuthService } from 'src/app/servicios/auth.service';
import { ReservasService } from 'src/app/servicios/reservas.service';

@Component({
  selector: 'app-respuesta-reservas',
  templateUrl: './respuesta-reservas.page.html',
  styleUrls: ['./respuesta-reservas.page.scss'],
})
export class RespuestaReservasPage implements OnInit {

  reservas:Reserva[];
  reservasDelDia:Reserva[];
  reservasAResponder:Reserva[];
  fecha=new Date();

  constructor(public datePipe: DatePipe, private route:Router, private auth:AuthService, private bda:ReservasService) {
    this.bda.getReservas().subscribe(list=>{
      let fech=this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
      let resA:Reserva[]=new Array();
      let resD:Reserva[]=new Array();
      this.reservas=list;
      list.filter(elem=>{
        if(elem.estado=="pendiente"){
          resA.push(elem);
        }else if(elem.estado=="confirmada" && elem.fecha==fech){
          resD.push(elem);
        }
      })

      this.reservasDelDia=resD;
      this.reservasAResponder=resA;
    });
   }

  ngOnInit() {
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

}
