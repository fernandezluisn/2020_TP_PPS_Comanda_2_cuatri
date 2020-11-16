
import { Router } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';
import { FirestorageService } from './../../servicios/firestorage.service';
import { Component } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanResult, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastService } from 'src/app/servicios/toast.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { SpinerService } from 'src/app/servicios/spiner.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.page.html',
  styleUrls: ['./alta-cliente.page.scss'],
})
export class AltaClientePage {
  public nombreUsuario: string;
  public apellidoUsuario: string;
  public dniUsuario: string;
  public correoUsuario: string;
  public claveUsuario: string;
  public dataFotoUsuario: string;
  public urlFotoUsuario: string;
  public nacionalidadUsuario: string;
  public nacimientoUsuario: string;
  public tipoRegistro: string;
  public dataDNI: string[];
  registros = [{ id: 0, tipo: 'Usuario' }, { id: 1, tipo: 'Anónimo' }];

  constructor(private barcodeScanner: BarcodeScanner, private camera: Camera, private alert: AlertService,
  private authService: AuthService, private firestorageService: FirestorageService, private router: Router,
  private spinnerService: SpinnerService,
  private toastService:ToastService) {
    this.nombreUsuario = '';
    this.apellidoUsuario = '';
    this.dniUsuario = '';
    this.correoUsuario = '';
    this.claveUsuario = '';
    this.dataFotoUsuario = '';
    this.urlFotoUsuario = '';
    this.nacionalidadUsuario = '';
    this.nacimientoUsuario = '';
    this.tipoRegistro = 'Usuario';
  }

  public tomarDatosDNI() {
    const options: BarcodeScannerOptions = { prompt: 'Escanee el DNI', formats: 'PDF_417' };
    this.barcodeScanner.scan(options).then((resultado: BarcodeScanResult) => {
      this.dataDNI = (resultado.text).split('@');
      this.dniUsuario = this.dataDNI[4].trim();
      this.apellidoUsuario = this.dataDNI[1];
      this.nombreUsuario = this.dataDNI[2];
    });
  }

  public tomarFotoUsuario() {
    const options: CameraOptions = {
      quality: 50,
      targetWidth: 500,
      targetHeight: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.ALLMEDIA,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true,
      saveToPhotoAlbum: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.dataFotoUsuario = imageData;
      this.firestorageService.uploadFotoToFirebase(imageData).then(imageURL => {
        this.urlFotoUsuario = imageURL;
      });
    });
  }


  validarSoloLetras( valor, nombre ) {
    if (valor === undefined || valor === '' || !/^[A-Za-z\s\xF1\xD1]+$/.test(valor)) {
      if ( nombre ) {
        this.toastService.errorToast('Formato de nombre y/o apellido inválido');
      }
      else {
        this.toastService.errorToast('Formato de sexo inválido');
      }
      return false;
    }
    return true;
  }

  validarEmail(valor) {
    if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(valor)) {
      this.toastService.errorToast('Formato de email inválido');
      return false;
    }
    return true;
  }

  validarDNI( dni: string ) {
    if ( dni.length < 6 || dni.length > 8 ) {
      this.toastService.errorToast('DNI: Cantidad de dígitos inválida');
      return false;
    }
    else {
      for ( const caracter of dni ) {
        if ( isNaN( parseInt( caracter, 10 )) ) {
          this.toastService.errorToast('Formato de dni inválido');
          return false;
        }
      }
    }
    return true;
  }

  validarContraseña( clave, claveConfirmada ) {
    if ( clave !== claveConfirmada ) {
      this.toastService.errorToast('La contraseña no se confirmó correctamente');
      return false;
    }
    return true;
  }


  public cargarUsuario() {
    if ((this.tipoRegistro === 'Anónimo' && this.nombreUsuario === '') ||
    this.tipoRegistro === 'Usuario' && (this.nombreUsuario === '' || this.apellidoUsuario === '' ||
    this.dniUsuario === '' || this.correoUsuario === '' || this.claveUsuario === '')) {
      this.alert.mensaje('', 'Debe completar todos los campos');
      return;
    }

    if (this.tipoRegistro === 'Usuario' && this.claveUsuario.length < 6) {
      this.alert.mensaje('', 'La clave debe tener al menos 6 caracteres');
      return;
    }

    let emailRegex;
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (this.tipoRegistro === 'Usuario' && !emailRegex.test(this.correoUsuario)) {
      this.alert.mensaje('', 'Debe ingresar un e-mail válido');
      return;
    }

  /*  if (this.urlFotoUsuario === '') {
      this.alert.mensaje('', 'Debe cargar una foto');
     return;
    }*/

    this.spinnerService.showSpinner();


    if (this.tipoRegistro === 'Usuario') {
      this.authService.CrearAuth(this.correoUsuario, this.claveUsuario, {
        uid: '',
        foto: this.urlFotoUsuario,
        nombre: this.nombreUsuario,
        apellido: this.apellidoUsuario,
        mail: this.correoUsuario,
        dni: this.dniUsuario,
        activo: false,
        estado: "desconectado",
        perfil: 'cliente'
      }, this.dataFotoUsuario).then(usuario => {
        this.spinnerService.hideSpinner();

        this.alert.mensaje('', 'Usuario registrado exitosamente! Va a poder ingresar a la aplicacion cuando sea aprobado por el dueño.');
        this.router.navigate(['/log-in']);
      }).catch(error => {
        this.spinnerService.hideSpinner();

        this.alert.mensaje('', 'ERROR: ' + error);
      });
    }
    else {
      this.authService.loginAnonimo({
        foto: this.urlFotoUsuario,
        nombre: this.nombreUsuario,
        estado: "desconectado",
        perfil: 'anonimo'
      }, this.dataFotoUsuario).then(usuario => {
        this.spinnerService.hideSpinner();
        this.router.navigate(['/home-cliente']);
        this.alert.mensaje('Bienvenido!', 'Ingresó como usuario anónimo');
      }).catch(error => {
        this.spinnerService.hideSpinner();
        this.alert.mensaje('ERROR',  error);
      });
    }
  }

  salir(){
    this.authService.LogOut();
    this.router.navigate(['log-in']);
  }
}
