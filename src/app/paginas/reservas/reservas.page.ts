import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Reserva } from 'src/app/interfaces/reserva';
import { AlertService } from 'src/app/servicios/alert.service';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { ToastService } from 'src/app/servicios/toast.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  fecha:Date;
  hoy=new Date().toISOString();
  hoy2;
  hora:Date;

  usuario;

  constructor(public datePipe: DatePipe, private alertar:AlertService, private bda:ReservasService, private toast:ToastService, private route:Router, private auth:AuthService) { 
    console.log(this.hoy);
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

    
    
    
  }

  ngOnInit() {
  }

  subir(){
    let hor=this.datePipe.transform(this.hora, 'HH:mm');;
    let fech=this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
    let r=new Reserva(this.usuario.id, fech, hor,"pendiente");
    if(fech==null && hor==null){
      this.alertar.mensaje("Faltan datos", "Debe ingresar fecha y hora");
    }else if(this.usuario.perfil=="anonimo"){
      this.alertar.mensaje("Usuario anónimo","Debe estar registrado para poder hacer una reserva");
    }else{
      try{
        this.bda.addReserva(r);
        this.toast.confirmationToast("Se solicitó la reserva correctamente");
      }catch(err){
        this.alertar.mensaje("ERROR", err);
      }
      
    }
    
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

}
