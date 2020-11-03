import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'src/app/servicios/toast.service';




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

  listaProductos:Producto[];
  productoElegido:Producto=null;

  loading;

  image1: string = null;
  image2: string = null;
  image3: string = null;

  alta=true;


  constructor(private storage:AngularFireStorage,     
    private camera: Camera, 
    private alertController:AlertController, 
    private barcodeScanner: BarcodeScanner,
    private loadingCtrl:LoadingController,
    private vibra:Vibration,
    private bda:ProductosService,
    private toast:ToastService) { 

      this.bda.devolverListadoProductos().subscribe(lista=>{
        this.listaProductos=lista;      
        this.listaProductos.sort((a,b)=>a.precio-b.precio); 
      
      }
        );

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
        duration: 3500
    });
    return this.loading.present();

    
  }

  async alertar(mensaje:string){
    const alert= this.alertController.create({
      cssClass: 'danger-alert-btn',
      header: 'Error',      
      message: mensaje,
      buttons: ['OK']
    });

    (await alert).present();
  }

  async subir(){
    this.presentLoading("Subiendo el producto.");
    let p=new Producto(this.nombre, this.descripcion, this.minutos, this.precio);
    try{    
      if(this.image1!=null){
        p= await this.guardarImagen(1, this.image1, p);
      }if(this.image2!=null){
        p= await this.guardarImagen(2, this.image2, p);
      }if(this.image3!=null){
        p= await this.guardarImagen(3, this.image3, p);    

      }  
      await this.cargarProducto(p,1);   
    }catch(err){
      this.alertar(err);
    }finally{
      this.image1=null;
      this.image2=null;
      this.image3=null;
      this.nombre="";
      this.descripcion="";
      this.minutos=0;
      this.precio=0;
    }
    
  }

  cargarProducto(prod:Producto, modalidad:number){
    if(prod.precio>0 && prod.nombre.length>3 && prod.tiempo>10 && prod.descripcion.length>20 && modalidad==1){  
      try{
        this.bda.createProducto(prod);
        this.toast.confirmationToast("Se guardó el producto.");

      }  catch(err){
        this.alertar(err);
      }  
      
    }else if(prod.precio>0 && prod.nombre.length>3 && prod.tiempo>10 && prod.descripcion.length>20 && modalidad==2){
      try{
        this.bda.actualizarProducto(prod);
        this.toast.confirmationToast("Se actualizó el producto.");

      }  catch(err){
        this.alertar(err);
      }  
    }
    else if(prod.precio==0){
      this.alertar("El precio debe ser mayor a 0")
    }else if(prod.nombre.length<4){
      this.alertar("El nombre debe tener más de 3 caracteres");
    }else if(prod.tiempo<11){
      this.alertar("Los productos tienen un mínimo de producción de 10 minutos");      
    }else{
      this.alertar("La descripción debe tener más de 20 caracteres");      
    }
  }

  async guardarImagen(numero:number, image:any, producto:Producto){
    try{
      const com=this.nombre+this.precio+numero;
      let img;
      await fetch(image)
      .then(res => res.blob().then(r=>{
        img=r
      }))
      
      const file= img;
      const path= com;
      const ref=this.storage.ref(path);    
      const task=this.storage.upload(path, file);     
      await task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=>{
        if(numero==1)
        producto.foto_1=url;      
        else if(numero==2)
        producto.foto_2=url;
        else
        producto.foto_3=url;
      } ))).subscribe(); 
      
      return producto;
    }catch(err){
      this.alertar(err);
      
    } 
  }


  cambiar(){
    if(this.alta)
    this.alta=false;
    else
    this.alta=true;
  }

  async eliminar(){
    this.presentLoading("Eliminando");
    try{
      await this.bda.BorrarProducto(this.productoElegido);
      this.toast.confirmationToast("se eliminó el producto.");
    }catch(e){
      this.alertar(e);
    }finally{
      this.productoElegido=null;
    }
    
  }

  async modificar(){
    this.presentLoading("Subiendo el producto.");
    let p=this.productoElegido;
    p.nombre=this.productoElegido.nombre;
    p.precio=this.productoElegido.precio;
    p.descripcion=this.productoElegido.descripcion;
    p.tiempo=this.productoElegido.tiempo;
    try{    
      if(this.image1!=null){
        p= await this.guardarImagen(1, this.image1, p);
      }if(this.image2!=null){
        p= await this.guardarImagen(2, this.image2, p);
      }if(this.image3!=null){
        p= await this.guardarImagen(3, this.image3, p);

      }  
      await this.cargarProducto(p,1);     
    }catch(err){
      this.alertar(err);
    }finally{
      this.productoElegido=null;
    }
  }
}
