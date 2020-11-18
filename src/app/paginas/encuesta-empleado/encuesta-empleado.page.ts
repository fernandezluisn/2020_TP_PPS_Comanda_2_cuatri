import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { EncuestaEmpleado } from 'src/app/interfaces/encuestaEmpleado';
import { AuthService } from 'src/app/servicios/auth.service';
import { EncuestasService } from 'src/app/servicios/encuestas.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { ToastService } from 'src/app/servicios/toast.service';


@Component({
  selector: 'app-encuesta-empleado',
  templateUrl: './encuesta-empleado.page.html',
  styleUrls: ['./encuesta-empleado.page.scss'],
})
export class EncuestaEmpleadoPage implements OnInit {

  
  image: string = null;
  url1: string;
  opcion:string;
  opciones=["Ordenado", "Desordenado", "Muy desordenado"];
  limpieza:number;
  demora:string;
  fila=false;
  roturas=false;
  falta=false;
  comentario:string;
  usuario;

  constructor(  private encuestasService: EncuestasService,  private camera: Camera, private storage:AngularFireStorage,
    private router:Router,
    private alertController:AlertController, 
    private spinner:SpinnerService,
    
    private toast:ToastService,private auth:AuthService
) { 
  this.opcion="Ordenado";
  this.comentario="";
  this.usuario = JSON.parse(localStorage.getItem('usuario'));
}

  ngOnInit() {
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

  async sacarFoto(){
    this.spinner.showSpinner();
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 1000,
      targetHeight: 1000
    }

    await this.camera.getPicture(options).then((imageData) => {
      this.image = `data:image/jpeg;base64,${imageData}`;   

      try{        
        const com=this.usuario.id+Date.now().toString();
        let img;
        fetch(this.image)
        .then(res => res.blob().then(r=>{
          img=r
        }))
        
        const file= img;
        const path= com;
        const ref=this.storage.ref(path);    
        const task=this.storage.upload(path, file);     
        task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=>{
          this.url1=url;       
        
        } ))).subscribe(); 
        }catch(e){
          this.alertar(e);
        }
        
     }, (err) => {
      this.alertar(err);
     });

     

     this.spinner.hideSpinner();
  }

  subir(){
    let f=new Date();
    let e=new EncuestaEmpleado(this.usuario.id, this.comentario, this.url1, this.demora, this.limpieza, f, this.fila, this.roturas, this.falta, this.opcion);
    try{
      this.encuestasService.addEncuestaEmpleado(e);
      this.toast.confirmationToast("Se cargó la encuesta.");      
      switch (this.usuario.perfil) {
        case 'bar':        
          this.router.navigate(["home-cocina"]);
          break;
         case 'cocina':     
            this.router.navigate(["home-cocina"]);
            break;        
         case 'mozo':           
            this.router.navigate(["home-comanda"]);
            break;
         case 'metre':           
            this.router.navigate(["home-metre"]);
            break;        
          
      }
    }catch(err){
      this.alertar(err);
    }

    
    
  }

  salir(){
    this.auth.LogOut();
    this.router.navigate(['log-in']);
  }

}
