import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesasService } from 'src/app/servicios/mesas.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { ToastService } from 'src/app/servicios/toast.service';

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
  qr:string="";
  repite=false;
  listaMesas:Mesa[];

  alta=true;

  mesaElegida=null;

  constructor(private storage:AngularFireStorage, 
    private bda:MesasService,
    private camera: Camera, 
    private alertController:AlertController, 
    private barcodeScanner: BarcodeScanner,
    private loadingCtrl:LoadingController,
    private vibra:Vibration,
    private toast:ToastService) 
    { 
    this.cantidad=0;
    this.numMesa=0;
    this.tipoMesa="Estandar";
    this.bda.devolverListadoMesas().subscribe(lista=>{
      this.listaMesas=lista;
      this.listaMesas.sort((a,b) => a.numero - b.numero);

    })
  }

  ngOnInit() {
  }

  cambiar(){
    if(this.alta)
    this.alta=false;
    else
    this.alta=true;
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
      message: mensaje,
      buttons: ['OK']
    });

    (await alert).present();
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
        message,
        spinner: "crescent",
        duration: 2000
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
    this.repite=false;
    
    this.listaMesas.forEach(mesa=>{
      if(mesa.numero==this.numMesa)
      this.repite=true
    })


    if(this.cantidad!=0)
    {
      if(!this.repite)
      {
        this.presentLoading("Subiendo mesa");

        if(this.image){
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
            await task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=>{
              this.url1=url;
              let f=new Mesa(this.numMesa, this.cantidad, this.tipoMesa, this.url1, "Vacia");
              if(this.qr.length>2)
              {
                f.qr=this.qr;
              }
              this.bda.createMesa(f);
            
            } ))).subscribe(); 
            
            this.toast.confirmationToast("se subió la mesa.");
            
          }catch(err){
            this.alertar(err);
            
          }    
        }else{
          let f=new Mesa(this.numMesa, this.cantidad, this.tipoMesa, null, "Vacia");
              if(this.qr.length>2)
              {
                f.qr=this.qr;
              }
              this.bda.createMesa(f);
              this.toast.confirmationToast("se subió la mesa.");
        }
       
      }else{
        this.alertar("Ese número de mesa ya existe");
      }
      
    }else{
      this.alertar("Debe ingresar una cantidad mayor a 0");
    }

    
  }


  async eliminar(){
    this.presentLoading("Eliminando");
    try{
      await this.bda.BorrarMesa(this.mesaElegida);
      this.toast.confirmationToast("se eliminó la mesa.");
    }catch(e){
      this.alertar(e);
    }finally{
      this.mesaElegida=null;
    }
    
  }

  async modificar(){
    let f=this.mesaElegida;
    f.numero=this.mesaElegida.numero;
    f.espacios=this.mesaElegida.espacios;
    f.tipo=this.mesaElegida.tipo;
    if(this.mesaElegida.cantidad!=0)
    {      
        this.presentLoading("Subiendo mesa");

        if(this.image){
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
            await task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=>{
              f.foto=url;              
              
              if(this.qr.length>2)
              {
                f.qr=this.qr;
              }
              this.bda.actualizarMesa(f);
            
            } ))).subscribe(); 
            
            this.toast.confirmationToast("se subió la mesa.");
            
          }catch(err){
            this.alertar(err);
            
          }    
        }else{
          
              if(this.qr.length>2)
              {
                f.qr=this.qr;
              }
              this.bda.actualizarMesa(f);
              this.toast.confirmationToast("se subió la mesa.");
        }   
      
      
    }else{
      this.alertar("Debe ingresar una cantidad mayor a 0");
    }
  }
}
