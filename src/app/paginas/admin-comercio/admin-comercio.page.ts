import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesasService } from 'src/app/servicios/mesas.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-admin-comercio',
  templateUrl: './admin-comercio.page.html',
  styleUrls: ['./admin-comercio.page.scss'],
})
export class AdminComercioPage implements OnInit {

  tipoMesa:string;
  numMesa:number;
  cantidad:number;
  loading;
  image: string = null;
  url1: string;
  qr:string;
  repite=false;
  listaMesas:Mesa[];

  constructor(private storage:AngularFireStorage, 
    private bda:MesasService,
    private camera: Camera, 
    private alertController:AlertController, 
    private barcodeScanner: BarcodeScanner,
    private loadingCtrl:LoadingController,
    private vibra:Vibration) 
    { 
    this.cantidad=0;
    this.numMesa=0;
    this.tipoMesa="Estandar";
    this.bda.devolverListadoMesas().subscribe(lista=>this.listaMesas=lista)
  }

  ngOnInit() {
  }
  

  escanear(){  

      
    this.barcodeScanner.scan().then(async barcodeData => {
      if(barcodeData.format=="QR_CODE")
      {
       
        this.qr=barcodeData.text;
        
      }else{
        this.alertar("El código debe ser QR");
        this.vibra.vibrate(500);
      }
      
     }).catch(err => {
         this.alertar("No se ha podido cargar el código.");
         this.vibra.vibrate(500);
     });

     
  }

  async alertar(mensaje:string){
    const alert= this.alertController.create({
      cssClass: 'danger-alert-btn',
      header: 'Error',
      subHeader: 'La cámara no ha podido cargar la imagen',
      message: mensaje,
      buttons: ['OK']
    });

    (await alert).present();
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
        message,
        spinner: "crescent",
        duration: 4500
    });
    return this.loading.present();

    
  }

  async sacarFoto(){
    this.presentLoading("Cargando imagen");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 1000,
      targetHeight: 1000
    }

    await this.camera.getPicture(options).then((imageData) => {
      this.image = `data:image/jpeg;base64,${imageData}`;   
        
     }, (err) => {
      this.alertar(err);
     });
  }

  async subir(){

    this.listaMesas.forEach(mesa=>{
      if(mesa.numero==this.numMesa)
      this.repite=true
    })
    if(this.qr.length>2 && this.cantidad!=0)
    {
      if(!this.repite)
      {
        this.presentLoading("Subiendo imagen");

        try{
          const com=this.numMesa+"mesa";
          let img;
          await fetch(this.image)
          .then(res => res.blob().then(r=>{
            img=r
          }))
          
          const file= img;
          const path= com;
          const ref=this.storage.ref(path);    
          const task=this.storage.upload(path, file);     
          task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=>{
            this.url1=url;
            let f=new Mesa(this.qr, this.numMesa, this.cantidad, this.tipoMesa, this.url1, "Vacia");
          this.bda.createMesa(f);
          
          } ))).subscribe(); 
          
        }catch(err){
          this.alertar(err);
          
        }    
      }else{
        this.alertar("Ese número de mesa ya existe");
      }
      
    }else{
      this.alertar("Debe ingresar código QR y una cantidad mayor a 0");
    }
  }

}
