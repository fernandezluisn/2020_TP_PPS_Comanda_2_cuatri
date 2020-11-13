import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Reserva } from 'src/app/interfaces/reserva';
import { DatePipe } from '@angular/common';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesasService } from 'src/app/servicios/mesas.service';
import { ReservasService } from 'src/app/servicios/reservas.service';

@Component({
  selector: 'app-home-supervisor',
  templateUrl: './home-supervisor.page.html',
  styleUrls: ['./home-supervisor.page.scss'],
})
export class HomeSupervisorPage implements OnInit {
  
  fecha=new Date();
  public mesas: Mesa[];

  constructor(private mesaService: MesasService, public datePipe: DatePipe, private platform: Platform, private route:Router, private auth:AuthService, private reservaService:ReservasService) { 
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
      
    let fech=this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
    this.fecha.setMinutes(this.fecha.getMinutes()-40);
    let resD:Reserva[]=new Array();      
    
    this.reservaService.getReservas().subscribe(list=>{
      list.filter(res=>{
        
        if(res.fecha==fech){
          resD.push(res);
        }
      })

      resD.forEach(resDia=>{
        let hor=new Date(resDia.fecha+" "+resDia.hora);          
        if(hor>this.fecha){
          this.mesas.filter(mesa=>{
            if(mesa.numero==resDia.mesa.numero && mesa.estado=="Vacia"){
              mesa.estado="Reservada";              
              this.mesaService.actualizarMesa(mesa);
              resDia.mesa=mesa;
              this.reservaService.updateReserva(resDia);
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
