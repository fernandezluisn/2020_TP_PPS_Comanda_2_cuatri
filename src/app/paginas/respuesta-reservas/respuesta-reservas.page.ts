import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from 'src/app/interfaces/mesa';
import { Reserva } from 'src/app/interfaces/reserva';
import { AlertService } from 'src/app/servicios/alert.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FcmService } from 'src/app/servicios/fcm.service';
import { MesasService } from 'src/app/servicios/mesas.service';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { ToastService } from 'src/app/servicios/toast.service';

@Component({
  selector: 'app-respuesta-reservas',
  templateUrl: './respuesta-reservas.page.html',
  styleUrls: ['./respuesta-reservas.page.scss'],
})
export class RespuestaReservasPage implements OnInit {

  reservas:Reserva[];
  reservasDelDia:Reserva[];
  reservasAResponder:Reserva[];
  reservasConfirmadas:Reserva[];
  fecha=new Date();

  mesasEstandar:Mesa[];
  mesasVip:Mesa[];
  mesasDisc:Mesa[];

  mesaE:Mesa=null;
  mesaV:Mesa=null;
  mesaD:Mesa=null;

  ver:string;

  constructor(public datePipe: DatePipe, private route:Router, private auth:AuthService, private bda:ReservasService, private bdaMEsas:MesasService,
    private alert:AlertService,
    private toast:ToastService,
    private fcm:FcmService) {
    this.bda.getReservas().subscribe(list=>{
      let fech=this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
      let resA:Reserva[]=new Array();
      let resD:Reserva[]=new Array();
      let resC:Reserva[]=new Array();

      this.reservas=list;
      list.filter(elem=>{
        if(elem.estado=="pendiente"){
          resA.push(elem);
        }else if(elem.estado=="confirmada" && elem.fecha==fech){
          resD.push(elem);
          console.log(elem);
        }else if(elem.estado=="confirmada" && elem.fecha!=fech){
          resC.push(elem);
        }
      })

      this.reservasDelDia=resD;
      this.reservasAResponder=resA;
      this.reservasConfirmadas=resC;
      this.reservasDelDia.sort((a,b) => Number(Date.parse(a.hora.toString())) - Number(Date.parse(b.hora.toString())));
      this.reservasAResponder.sort((a,b) => Number(Date.parse(a.fecha2.toString())) - Number(Date.parse(b.fecha2.toString())));
      this.reservasConfirmadas.sort((a,b) => Number(Date.parse(a.fecha2.toString())) - Number(Date.parse(b.fecha2.toString())));

      this.reservasAResponder.reverse();
      this.reservasConfirmadas.reverse();
    });

    this.bdaMEsas.devolverListadoMesas().subscribe(lista=>{

      let di:Mesa[]=new Array();
      let vi:Mesa[]=new Array();
      let es:Mesa[]=new Array();
      lista.filter(ele=>{
        if(ele.tipo=="Estandar"){
          es.push(ele);
        }else if(ele.tipo=="Vip"){
          vi.push(ele);
        }else{
          di.push(ele);
        }
      })
      this.mesasDisc=di;
      this.mesasEstandar=es;
      this.mesasVip=vi;
      this.mesasVip.sort((a,b) => a.numero - b.numero);
      this.mesasEstandar.sort((a,b) => a.numero - b.numero);
      this.mesasDisc.sort((a,b) => a.numero - b.numero);

      
      this.ver="Sol";
    })

    
   }

  ngOnInit() {
  }

  subir(res:Reserva){
    if(res.tipo=="Vip"){
      if(this.mesaV==null){
        this.alert.mensaje("Error","Debe seleccionar una mesa");
      }else{
        res.mesa=this.mesaV;
        res.estado="confirmada";
        this.bda.updateReserva(res);
        this.fcm.enviarMensaje("Reserva confirmada", "Se confirmó su reserva para el día "+res.fecha,'notificacionCliente');

      }
    }else if(res.tipo=="Estandar"){
      if(this.mesaE==null){
        this.alert.mensaje("Error","Debe seleccionar una mesa");
      }else{
        res.mesa=this.mesaE;
        res.estado="confirmada";
        this.bda.updateReserva(res);
        this.fcm.enviarMensaje("Reserva confirmada", "Se confirmó su reserva para el día "+res.fecha,'notificacionCliente');

      }
    }else{
      if(this.mesaD==null){
        console.log(this.mesaD);
        this.alert.mensaje("Error","Debe seleccionar una mesa");
      }else{
        res.mesa=this.mesaD;
        res.estado="confirmada";
        this.bda.updateReserva(res);
        this.toast.confirmationToast("Se confirmó la reserva");
        this.fcm.enviarMensaje("Reserva confirmada", "Se confirmó su reserva para el día "+res.fecha,'notificacionCliente');

      }
    }
  }

  eliminar(reserva:Reserva){
    reserva.estado="rechazada";
    this.bda.updateReserva(reserva);
    this.toast.confirmationToast("Se rechazó la reserva");
    this.fcm.enviarMensaje("Reserva rechazada", "Se rechazó su reserva para el día "+reserva.fecha,'notificacionCliente');
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

}
