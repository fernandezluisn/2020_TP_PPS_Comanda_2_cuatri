import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { MesaCliente } from 'src/app/interfaces/mesa-cliente';
import { MesaClienteService } from 'src/app/servicios/mesa-cliente.service';

@Component({
  selector: 'app-propina',
  templateUrl: './propina.page.html',
  styleUrls: ['./propina.page.scss'],
})
export class PropinaPage implements OnInit {

  loading;
  satisfaccion:string=null;
  mesaCliente:MesaCliente;
  listaMEsas:MesaCliente[];
  idMesaCliente:string;
  propina:number

  constructor(public alertController: AlertController, private router:Router, private bda:MesaClienteService,
    private loadingCtrl: LoadingController, private barcodeScanner: BarcodeScanner, private vibra:Vibration,
    private tomarId:ActivatedRoute,) {

      this.idMesaCliente=this.tomarId.snapshot.paramMap.get('idMesaCliente');

      this.bda.devolverListadoMesas().subscribe(lista=>{
        this.listaMEsas=lista;
        this.listaMEsas.filter(mesa=>{
          if(mesa.id==this.idMesaCliente)
          this.mesaCliente=mesa;
        })
      })
     }

  ngOnInit() {
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
        message,
        spinner: "bubbles",
        duration: 1000
    });
    return this.loading.present();

    
  }

  cargar(codigo:string){
    let n=0;
    this.satisfaccion=codigo;
    if(codigo=="Excelente") {
      n=1.2;
    }else if(codigo=="Muy Bien"){
      n=1.15;
    }else if(codigo=="Bien"){
      n=1.1;      
    }else if(codigo=="Regular"){
      n=1.05;
    }else if(codigo=="Malo"){
      n=1;
    }

    return n;
  }

  async alertar(mensaje:string){
    const alert= this.alertController.create({
      cssClass: 'danger-alert-btn',
      header: 'Error',
      subHeader: 'Error en la carga',
      message: mensaje,
      buttons: ['OK']
    });

    (await alert).present();
  }


  escanear(){  

      
    this.barcodeScanner.scan().then(async barcodeData => {
      if(barcodeData.format=="QR_CODE")
      {
       
        this.propina=this.cargar (barcodeData.text);
        
      }else{
        this.alertar("El código debe ser QR");
        this.vibra.vibrate(500);
      }
      
     }).catch(err => {
         this.alertar("No se ha podido cargar el código.");
         this.vibra.vibrate(500);
     });
   
   
     //this.cargarUsu();
  }

  limpiar(){
    this.satisfaccion=null;
  }

  subirPropina(){
    try{
      this.presentLoading("Cargando propina");
      this.mesaCliente.propina=this.propina;
      this.bda.actualizarMesa(this.mesaCliente);
      this.router.navigate(["home-cliente"]);
    }catch(e){
      this.alertar(e);
    }
    
  }

}
