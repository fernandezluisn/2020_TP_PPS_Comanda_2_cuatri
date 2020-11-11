import { Component, OnInit } from '@angular/core';

//graficos
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


import { EncuestaEmpleado } from 'src/app/interfaces/encuestaEmpleado';
import { EncuestasService } from 'src/app/servicios/encuestas.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

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

  unos=0;
  dos=0;
  tres=0;
  cuatros=0;
  cincos=0;

  public numerosLabels;

  ordenado=0;
  desorden=0;
  mDesorden=0;
  constructor(private service:EncuestasService, private route:Router, private auth:AuthService) { 
    this.service.GetEncuestasEmpleados().subscribe(lista=>{
      this.encuestasEmpleados=lista;
    })

    for(let i=1; i<6; i++){
      this.numerosLabels.push[i];
    }
    this.numerosLabels.sort();

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

      if(elem.limpieza==1){
        this.unos++;
      }else if(elem.limpieza==2){
        this.dos++;
      }else if(elem.limpieza==3){
        this.tres++;
      }else if(elem.limpieza==4){
        this.cuatros++;
      }else{
        this.cincos++;
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

  public dataNumeros:ChartDataSets[]=[
    { data: [this.unos, this.dos, this.tres, this.cuatros, this.cincos], label: '' } 
  ];

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }
}
