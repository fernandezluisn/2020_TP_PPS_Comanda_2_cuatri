import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Reserva } from 'src/app/interfaces/reserva';
import { DatePipe } from '@angular/common';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesasService } from 'src/app/servicios/mesas.service';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { FcmService } from 'src/app/servicios/fcm.service';

@Component({
  selector: 'app-home-supervisor',
  templateUrl: './home-supervisor.page.html',
  styleUrls: ['./home-supervisor.page.scss'],
})
export class HomeSupervisorPage implements OnInit {
  
  fecha=new Date();
  public mesas: Mesa[];

  constructor(private mesaService: MesasService, public datePipe: DatePipe, private platform: Platform, private route:Router,
     private auth:AuthService, private reservaService:ReservasService,
     private fcmService:FcmService) { 
    this.mesaService.getMesas().subscribe(mesas => { this.mesas = mesas; 
      this.chequearReservas();

    });
  }

  ngOnInit() {
  }

  Mover(endpoint){
    this.route.navigate([endpoint])
  }

  Encuesta(){
    this.route.navigate(['encuesta-supervisor'])
  }


  EncuestaCliente(){
    this.route.navigate(['graficos-cliente'])
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

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

}
