import { Component, OnInit } from '@angular/core';

//graficos
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


import { EncuestaEmpleado } from 'src/app/interfaces/encuestaEmpleado';
import { EncuestasService } from 'src/app/servicios/encuestas.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {

  encuestasEmpleados:EncuestaEmpleado[];
  verdaderosFila=0;
  falsosFila=0;
  verdaderosFalta=0;
  falsosFalta=0;
  verdaderosRoturas=0;
  falsosRoturas=0;
  constructor(private service:EncuestasService) { 
    this.service.GetEncuestasEmpleados().subscribe(lista=>{
      this.encuestasEmpleados=lista;
    })

    this.encuestasEmpleados.forEach(elem=>{
      if(elem.fila){
        this.verdaderosFila++;
      }else{
        this.falsosFila++;
      }

      if(elem.roturas){
        this.verdaderosRoturas++;
      }else{
        this.falsosRoturas++;
      }

      if(elem.falta){
        this.verdaderosFalta++;    
      }else{
        this.falsosFalta++;
      }
    });   
  }

  ngOnInit() {
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Faltantes', 'Fila', 'Roturas'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [this.verdaderosFalta, this.verdaderosFila, this.verdaderosRoturas], label: 'Si' },
    { data: [this.falsosFalta, this.falsosFila, this.falsosRoturas], label: 'No' }
  ];

  //falta limpieza, demora y orden

}
