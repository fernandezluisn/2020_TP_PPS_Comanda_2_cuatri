import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MesaCliente } from 'src/app/interfaces/mesa-cliente';
import { Pais } from 'src/app/interfaces/pais';
import { MesaClienteService } from 'src/app/servicios/mesa-cliente.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {

  
  string1:string;
  string2:string;
  string3:string;
  string4:string;

  lista:Array<Pais>;
  alemania:Pais;
  andorra:Pais;
  arabiaS:Pais;
  australia:Pais;
  bolivia:Pais;
  brasil:Pais;
  chile:Pais;
  china:Pais;
  corea:Pais;
  españa:Pais;
  francia:Pais;
  inglaterra:Pais;
  italia:Pais;
  marruecos:Pais;
  mejico:Pais;
  mongolia:Pais;
  peru:Pais;
  rusia:Pais;
  turquia:Pais;
  uruguay:Pais;
  ecuador:Pais;
  
  resultado=true;

  paisE:Pais;

  perder=true;
  ganarB=true;

  jugadorR:any;

  mesaCliente:MesaCliente;

  idMesaCliente:string;
  constructor(private bda:MesaClienteService, private tomarId:ActivatedRoute, private route:Router) {
    
    this.idMesaCliente=this.tomarId.snapshot.paramMap.get('idMesaCliente');
    this.lista=new Array();
    
      this.bda.devolverListadoMesas().subscribe(lista=>{
        lista.filter(mesa=>{
            if(mesa.id==this.idMesaCliente)
            this.mesaCliente=mesa;
        })
      })
      

      this.jugadorR=JSON.parse(localStorage.getItem('usuario'));
    

    this.alemania=new Pais('Alemania', "Participó de dos guerras mundiales, ganó cuatro mundiales de futbol y queda en el centro de Europa.", "../../assets/imagenes/paises/alemania.jpg");
    this.lista.push(this.alemania);
    this.andorra=new Pais('Andorra', "Se encuentra en los Pirineos entre España y Francia.", "../../assets/imagenes/paises/Andorra.jpg");
    this.lista.push(this.andorra);
    this.arabiaS=new Pais("Arabia Saudita", "Aquí vivió Mahoma", "../../assets/imagenes/paises/Arabia Saudita.jpg");
    this.lista.push(this.arabiaS);
    this.australia=new Pais("Australia", "El país de los canguros.", "../../assets/imagenes/paises/Australia.jpg");
    this.lista.push(this.australia);
    this.bolivia=new Pais("Bolivia", "Su nombre es en honor a uno de los libertadores del continente.", "../../assets/imagenes/paises/Bolivia.jpg");
    this.lista.push(this.bolivia);    
    this.brasil=new Pais("Brasil", "La tierra del carnaval.", "../../assets/imagenes/paises/Brasil.jpg");
    this.lista.push(this.brasil);
    this.chile=new Pais("Chile", "San Martín cruzó la cordillera para pelear allí contra los españoles.", "../../assets/imagenes/paises/Chile.jpg");
    this.lista.push(this.chile);
    this.china=new Pais("China", "El país con más habitantes del mundo.", "../../assets/imagenes/paises/China.jpg");
    this.lista.push(this.china);
    this.corea=new Pais("Corea del sur", "Queda al sur de otro país que se llama igual y con el cual fueron una sola nación.", "../../assets/imagenes/paises/Corea del sur.jpg");
    this.lista.push(this.corea);
    this.españa=new Pais("España", "La tierra de los reyes catolicos, Cervantes y el quijote.", "../../assets/imagenes/paises/España.jpg");
    this.lista.push(this.españa);
    this.francia=new Pais("Francia", "La tierra de Napoleón.", "../../assets/imagenes/paises/Francia.jpg");
    this.lista.push(this.francia);
    this.inglaterra=new Pais("Inglaterra", "Tierra de piratas y corsarios.", "../../assets/imagenes/paises/Inglaterra.jpg");
    this.lista.push(this.inglaterra);
    this.italia=new Pais("Italia", "El país de la lasaña.", "../../assets/imagenes/paises/Italia.jpg");
    this.lista.push(this.italia);
    this.marruecos=new Pais("Marruecos", "Queda en el norte de Africa.", "../../assets/imagenes/paises/Marruecos.jpg");
    this.lista.push(this.marruecos);
    this.mejico=new Pais("Mejico", "La tierra de los Aztecas.", "../../assets/imagenes/paises/Mejico.jpg");
    this.lista.push(this.mejico);
    this.mongolia=new Pais("Mongolia", "Territorio de pueblos nomades que conquistaron en 25 años más territorio que los romanos en 400.", "../../assets/imagenes/paises/Mongolia.jpg");
    this.lista.push(this.mongolia);
    this.peru=new Pais("Perú", "La tierra de los incas.", "../../assets/imagenes/paises/Peru.jpg");
    this.lista.push(this.peru);
    this.rusia=new Pais("Rusia", "La tierra de los zares.", "../../assets/imagenes/paises/Rusia.jpg");
    this.lista.push(this.rusia);
    this.turquia=new Pais("Turquía", "La tierra de Mehmed.", "../../assets/imagenes/paises/Turquia.jpg");
    this.lista.push(this.turquia);
    this.uruguay=new Pais("Uruguay", "Queda del otro lado del río más ancho del mundo.", "../../assets/imagenes/paises/Uruguay.jpg");
    this.lista.push(this.uruguay);
    this.ecuador=new Pais("Ecuador", "Se llama igual que la línea imeginaria que parte el mundo en dos.", "../../assets/imagenes/paises/Ecuador.jpg");
    this.lista.push(this.ecuador);
    this.lista.push(this.alemania);
    this.lista.push(this.andorra);
    this.lista.push(this.arabiaS);
    this.lista.push(this.australia);
    this.lista.push(this.bolivia);    
    this.lista.push(this.brasil);
    this.lista.push(this.chile);
    this.lista.push(this.china);
    this.lista.push(this.corea);
    this.lista.push(this.españa);
    this.lista.push(this.francia);
    this.lista.push(this.inglaterra);
    this.lista.push(this.italia);
    this.lista.push(this.marruecos);
    this.lista.push(this.mejico);
    this.lista.push(this.mongolia);
    this.lista.push(this.peru);
    this.lista.push(this.rusia);
    this.lista.push(this.turquia);
    this.lista.push(this.uruguay);
    this.lista.push(this.ecuador);
    
  }

  ngOnInit(): void {
    this.elegirRelleno();
  }

  elegirRelleno(){
    this.paisE=this.elegirPais();
    
    var p2:Pais;
    var p3:Pais;
    var p4:Pais;
    do{
      p2=this.elegirPais();
    }while(this.paisE.nombre==p2.nombre);
    do{
      p3=this.elegirPais();
    }while(this.paisE.nombre==p3.nombre || p2.nombre==p3.nombre);
    do{
      p4=this.elegirPais();
    }while(this.paisE.nombre==p4.nombre || p2.nombre==p4.nombre || p4.nombre==p3.nombre);

    var a:number=Math.floor( Math.random()*10);
    switch(a){
      case 7:
        this.string1=this.paisE.nombre;
        this.string2=p2.nombre;
        this.string3=p3.nombre;
        this.string4=p4.nombre;
        break;
        case 8:
        this.string1=this.paisE.nombre;
        this.string2=p2.nombre;
        this.string3=p3.nombre;
        this.string4=p4.nombre;
        break;
        case 9:
        this.string1=this.paisE.nombre;
        this.string2=p2.nombre;
        this.string3=p3.nombre;
        this.string4=p4.nombre;
        break;
        case 4:
        this.string2=this.paisE.nombre;
        this.string1=p2.nombre;
        this.string3=p3.nombre;
        this.string4=p4.nombre;
        break;
        case 5:
        this.string2=this.paisE.nombre;
        this.string1=p2.nombre;
        this.string3=p3.nombre;
        this.string4=p4.nombre;
        break;
        case 6:
        this.string2=this.paisE.nombre;
        this.string1=p2.nombre;
        this.string3=p3.nombre;
        this.string4=p4.nombre;
        break;
        case 2:
        this.string3=this.paisE.nombre;
        this.string2=p2.nombre;
        this.string1=p3.nombre;
        this.string4=p4.nombre;
        break;
        case 3:
        this.string3=this.paisE.nombre;
        this.string2=p2.nombre;
        this.string1=p3.nombre;
        this.string4=p4.nombre;
        break;
        case 0 :
        this.string4=this.paisE.nombre;
        this.string2=p2.nombre;
        this.string3=p3.nombre;
        this.string1=p4.nombre;
        break;
        case 1:
        this.string4=this.paisE.nombre;
        this.string2=p2.nombre;
        this.string3=p3.nombre;
        this.string1=p4.nombre;
        break;       

    }
    

    

  }

  elegirPais():Pais{
    let p:Pais;
    for(let i=0; i<=Math.floor((Math.random()*100)); i++)
    {
      
        p=this.lista[i];            
    }
    
    return p;
  }

  ganar(string:string){
    
    
    this.resultado=false;

    if(string==this.paisE.nombre){
      this.perder=true;
      this.ganarB=false;
      this.mesaCliente.juegoDescuento=5;
    }else{
      this.perder=false;
      this.ganarB=true;
      this.mesaCliente.juegoDescuento=0;
    }
    this.bda.actualizarMesa(this.mesaCliente);
  }

  volver(){
    this.route.navigate(["home-cliente"]);
  }

 

}
