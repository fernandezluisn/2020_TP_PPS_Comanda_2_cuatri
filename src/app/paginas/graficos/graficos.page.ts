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
  muchas=0;
  normal=0;
  poca=0;
  mp=0;

  ordenado=0;
  desorden=0;
  mDesorden=0;
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

      if(elem.demora=="Mucha"){
        this.muchas++;
      }else if(elem.demora=="Normal"){
        this.normal++;
      }else if(elem.demora=="Poca"){
        this.poca++;
      }else{
        this.mp++;
      }

      if(elem.orden=="Ordenado"){
        this.ordenado++;
      }else if(elem.orden=="Desordenado"){
        this.desorden++;
      }else{
        this.mDesorden++;
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
    { data: [this.verdaderosFalta, this.verdaderosFila, this.verdaderosRoturas], label: 'No' }
  ];

  //falta limpieza y orden

  public dataDemora: ChartDataSets[] = [
    { data: [this.muchas, this.normal, this.poca, this.mp], label: '' }    
  ];
  public demoraLabels: Label[] = ['Mucha', 'Normal', 'Poca', "Muy poca"];

  public dataOrden: ChartDataSets[] = [
    { data: [this.ordenado, this.desorden, this.mDesorden], label: '' }    
  ];
  public ordenLabels: Label[] = ["Ordenado", "Desordenado", "Muy desordenado"];
}
