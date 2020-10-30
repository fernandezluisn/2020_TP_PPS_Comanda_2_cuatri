import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/servicios/productos.service';




@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.page.html',
  styleUrls: ['./alta-producto.page.scss'],
})
export class AltaProductoPage implements OnInit {

  nombre:string;
  minutos:number;
  descripcion:string;
  qr:string;
  precio:number;

  loading;

  image1: string = null;
  image2: string = null;
  image3: string = null;

  constructor(private storage:AngularFireStorage,     
    private camera: Camera, 
    private alertController:AlertController, 
    private barcodeScanner: BarcodeScanner,
    private loadingCtrl:LoadingController,
    private vibra:Vibration,
    private bda:ProductosService) { 
      this.nombre="";
      this.minutos=0;
      this.descripcion="";
      this.precio=0;
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

  async sacarFoto(id:number){
    this.presentLoading("Cargando imagen");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 1000,
      targetHeight: 1000
    }

    await this.camera.getPicture(options).then((imageData) => {
      if(id==1)
      this.image1 = `data:image/jpeg;base64,${imageData}`;
      else if(id==2)   
      this.image2 = `data:image/jpeg;base64,${imageData}`;
      else
      this.image3 = `data:image/jpeg;base64,${imageData}`;
     }, (err) => {
      this.alertar(err);
     });
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
        message,
        spinner: "crescent",
        duration: 4500
    });
    return this.loading.present();

    
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

  async subir(){
    if(this.image1==null){
      let p=new Producto(this.nombre, this.descripcion, this.minutos, this.precio);
      this.cargarProducto(p);
    }else if(this.image2==null){
         
    }else if(this.image3==null){

    }else{

    }
    
  }

  cargarProducto(prod:Producto){
    if(prod.precio>0 && prod.nombre.length>3 && prod.tiempo>10 && prod.descripcion.length>20){
      
      this.bda.createProducto(prod);
    }else if(prod.precio==0){
      console.log("El precio debe ser mayor a 0")
    }else if(prod.nombre.length<4){
      console.log("El nombre debe tener más de 3 caracteres");
    }else if(prod.tiempo<11){
      console.log("Los productos tienen un mínimo de producción de 10 minutos");      
    }else{
      console.log("La descripción debe tener más de 20 caracteres");
      
    }
  }
}
