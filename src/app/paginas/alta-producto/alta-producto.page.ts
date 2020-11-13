import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'src/app/servicios/toast.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertService } from 'src/app/servicios/alert.service';




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
  cargarProd=false;
  listaProductos:Producto[];
  productoElegido:Producto=null;
  loading;

  image1: string = null;
  image2: string = null;
  image3: string = null;

  url1=null;
  url2=null;
  url3=null;

  alta=true;
  usuario;


  constructor(private storage:AngularFireStorage,     
    private camera: Camera, 
    private alertService:AlertService,
    private barcodeScanner: BarcodeScanner,
    private loadingCtrl:LoadingController,
    private vibra:Vibration,
    private bda:ProductosService,
    private toast:ToastService, private route:Router, private auth:AuthService) { 
      this.usuario = JSON.parse(localStorage.getItem('usuario'));

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
        this.alertService.mensaje("Error","El código debe ser QR");
        this.vibra.vibrate(500);
      }
      
     }).catch(err => {
         this.alertService.mensaje("Error","No se ha podido cargar el código.");
         this.vibra.vibrate(500);
     });

     
  }

  async foto1(){
    await this.sacarFoto(1);
    await this.guardarImagen1();
  }

  async foto2(){
    await this.sacarFoto(2);
    await this.guardarImagen2();
  }

  async foto3(){
    await this.sacarFoto(3);
    await this.guardarImagen3();
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
      this.alertService.mensaje("Error",err);
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

  async subir(){
    this.presentLoading("Subiendo el producto.");
    let m:string;
    if(this.usuario.perfil=='bar')
    m="bebida";
    else
    m="comida";
    if(this.url1!=null && this.url2!=null && this.url3!=null){
      let p=new Producto(this.nombre, this.descripcion, this.minutos, this.precio, m, this.url1, this.url2, this.url3);   
      this.cargarProducto(p, 1);
    }else{
      this.alertService.mensaje("Error","Deben estar subidas las tres imagenes para poder cargar el producto")
    }
       
    
  }

  cargarProducto(prod:Producto, modalidad:number){
    if(prod.precio>0 && prod.nombre.length>3 && prod.tiempo>10 && prod.descripcion.length>20 && modalidad==1){  
      try{
        this.bda.createProducto(prod);
        this.toast.confirmationToast("Se guardó el producto.");

      }  catch(err){
        this.alertService.mensaje("Error",err);
      }  
      
    }else if(prod.precio>0 && prod.nombre.length>3 && prod.tiempo>10 && prod.descripcion.length>20 && modalidad==2){
      try{
        this.bda.actualizarProducto(prod);
        this.toast.confirmationToast("Se actualizó el producto.");

      }  catch(err){
        this.alertService.mensaje("Error",err);
      }  
    }
    else if(prod.precio==0){
      this.alertService.mensaje("Error","El precio debe ser mayor a 0")
    }else if(prod.nombre.length<4){
      this.alertService.mensaje("Error","El nombre debe tener más de 3 caracteres");
    }else if(prod.tiempo<11){
      this.alertService.mensaje("Error","Los productos tienen un mínimo de producción de 10 minutos");      
    }else{
      this.alertService.mensaje("Error","La descripción debe tener más de 20 caracteres");      
    }
  }

  async guardarImagen1(){
    
    if(this.image1){
        try{

        
        const com=this.nombre+this.precio+this.minutos+1;
        let img;
        await fetch(this.image1)
        .then(res => res.blob().then(r=>{
          img=r
        }))
        
        const file= img;
        const path= com;
        const ref=this.storage.ref(path);    
        const task=this.storage.upload(path, file);     
        await task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=>{
          this.url1=url;       
        
        } ))).subscribe(); 
        }catch(e){
          
        }
         
    }else{
      this.alertService.mensaje("Error", "No está cargada la imagen 1");
    }
   
  }

  async guardarImagen2(){
    
    if(this.image2){
        try{

        
        const com=this.nombre+this.precio+this.minutos+2;
        let img;
        await fetch(this.image2)
        .then(res => res.blob().then(r=>{
          img=r
        }))
        
        const file= img;
        const path= com;
        const ref=this.storage.ref(path);    
        const task=this.storage.upload(path, file);     
        await task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=>{
          this.url2=url;       
        
        } ))).subscribe(); 
        }catch(e){
          
        }
         
    }else{
      this.alertService.mensaje("Error", "No está cargada la imagen 2");
    }
   
  }
      
        
  async guardarImagen3(){
    
    if(this.image3){
        try{

        
        const com=this.nombre+this.precio+this.minutos+3;
        let img;
        await fetch(this.image3)
        .then(res => res.blob().then(r=>{
          img=r
        }))
        
        const file= img;
        const path= com;
        const ref=this.storage.ref(path);    
        const task=this.storage.upload(path, file);     
        await task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=>{
          this.url3=url;       
        
        } ))).subscribe(); 
        }catch(e){
          
        }
         
    }else{
      this.alertService.mensaje("Error", "No está cargada la imagen 3");
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
      this.alertService.mensaje("Error",e);
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
      await this.cargarProducto(p,2);  

    }catch(err){
      this.alertService.mensaje("Error",err);
    }finally
    {
      this.productoElegido=null;
    }
    
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }
}
