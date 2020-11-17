import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from 'src/app/servicios/consulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  constructor(private router: Router, private consultaService: ConsultaService) { }
  consultas = [];

  ngOnInit() {
          this.consultaService.getConsultas().subscribe(consultas=>{
            this.consultas = [];
            console.log(consultas);
            consultas.forEach(consulta => {
              if( consulta.estado === "Pendiente" ) {
                this.consultas.push(consulta);
            }
        });   
       })
      }

      Marcar(consulta){
          consulta.estado = "Vista";
          this.consultaService.updateConsulta(consulta.id, consulta);
      }
}
