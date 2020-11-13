import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators/map';
import { resolve, reject, isRejected } from 'q';
import { Anonimo, Empleado, Cliente } from '../interfaces/usuario';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AlertService } from './alert.service';
import { FcmService } from './fcm.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: any = false;
  usuarios:any=[];
  clientes:any=[];
  constructor(
    private AFauth: AngularFireAuth,
    private firestore: AngularFirestore,
    private fireStorage: AngularFireStorage,
    private router:Router,
    private alert: AlertService,
    private fcmService: FcmService  ) { }

  loginAnonimo(usuario, foto) {
    return new Promise((resolved, rejected) => {
      this.AFauth.auth.signInAnonymously().then(usuarioAnonimo => {
        usuario.uid = usuarioAnonimo.user.uid;
        this.CrearUsuario(usuario, foto).then(usr => {
          localStorage.setItem('usuario', JSON.stringify(usr));
          resolved(usr);
        });
      }).catch(error => {
        rejected(error);
      });
    });
  }

  LogIn(mail, pass) {
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(mail, pass).then(usuarioLogeado => {
        // let usuarioData = this.TransformarUsuario(usuarioLogeado.user.uid)
        let uid = usuarioLogeado.user.uid;
        console.log(uid);
         this.GetUsuarios().then(usrs => {
          usrs.forEach(element => {
            let obj_element = element.data();
            obj_element.id = element.id;
        //    this.fcmService.DesuscribirDeTodas();

            if (obj_element.activo && obj_element.uid == uid) {
              switch (obj_element.perfil) {
              case 'bar':
               this.usuario = obj_element as Empleado;
               localStorage.setItem('usuario', JSON.stringify(this.usuario));
                resolve(this.usuario);
                this.router.navigate(["home-cocina"]);
                break;
               case 'cocina':
                 this.usuario = obj_element as Empleado;
                 this.fcmService.SuscribirANotificacion("notificacionCocina")
                 localStorage.setItem('usuario', JSON.stringify(this.usuario));
                  resolve(this.usuario);
                  this.router.navigate(["home-cocina"]);
                  break;
              case 'supervisor':
               this.usuario = obj_element as Empleado;
               this.fcmService.SuscribirANotificacion('notificacionSupervisor')
               localStorage.setItem('usuario', JSON.stringify(this.usuario));
                resolve(this.usuario);
                this.router.navigate(["home-supervisor"]);
                break;
               case 'mozo':
                 this.usuario = obj_element as Empleado;
                 this.fcmService.SuscribirANotificacion('notificacionMozo')
                 localStorage.setItem('usuario', JSON.stringify(this.usuario));
                  resolve(this.usuario);
                  this.router.navigate(["home-mozo"]);
                  break;
               case 'metre':
                 this.usuario = obj_element as Empleado;
                 this.fcmService.SuscribirANotificacion('notificacionListaEspera')
                 localStorage.setItem('usuario', JSON.stringify(this.usuario));
                  resolve(this.usuario);
                  this.router.navigate(["home-metre"]);
                  break;
               case 'delivery':
                 this.usuario = obj_element as Empleado;
                 localStorage.setItem('usuario', JSON.stringify(this.usuario));
                  resolve(this.usuario);
                  this.router.navigate(["home-comanda"]);
                  break;
                case 'dueño':
                  this.fcmService.SuscribirANotificacion('notificacionDueño')
                  this.usuario = obj_element as Empleado;
                 localStorage.setItem('usuario', JSON.stringify(this.usuario));
                  resolve(this.usuario);
                  this.router.navigate(["home-supervisor"]);
                  break;
                case 'cliente':
                  this.fcmService.SuscribirANotificacion('notificacionCliente')
                this.usuario = obj_element as Cliente;
                  localStorage.setItem('usuario', JSON.stringify(this.usuario));
                  resolve(this.usuario);
                  this.router.navigate(["home-cliente"]);
                 break;
               }
             }
             if (obj_element.activo == false && obj_element.uid == uid) {
              this.alert.mensaje('','Se encuentra pendiente la aprobacion por el dueño');
             }
           });
          if (this.usuario) {
            resolve(this.usuario);
             resolve(true);
           }
           else {
             this.LogOut();
           rejected(this.usuario);
           }
         });
      }).catch(err => {
        console.log(err);
        this.LogOut();
        rejected(err);
      });
    });
  }

  LogOut() {
    this.fcmService.DesuscribirDeTodas();
    localStorage.removeItem('usuario');
    this.AFauth.auth.signOut();
  }

  GetUsuarios() {

    return this.firestore.collection('usuarios').get().toPromise();

  }

  GetUsuariosPorAceptar()
  {

    return new Promise((resolve, rejected) => {
      this.GetUsuarios().then(usrs => {
        usrs.forEach(element => {
          let obj_element = element.data();
          obj_element.id = element.id;
          if((obj_element.perfil=='cliente')&&!(obj_element.activo)){
            this.clientes.push(obj_element);
          }

        });
                //guardo los usuarios
                resolve(this.clientes);
      });

    });
           
         
  }

  GetUsuariosAceptar() {
    return new Promise((resolve, rejected) => {
      this.firestore.collection('usuarios').ref.where('activo', '==', false).get()
      .then(async pedidos => {
        resolve(pedidos.docs.map(documento => {
          const data = documento.data();
          data.id = documento.id;
          return data;
        }));
      }).catch(err=>{rejected(err)});
    });
  }

  CrearAuth(mail, pass, usuario, foto) {
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.createUserWithEmailAndPassword(mail, pass).then(nuevousuario => {
        // let usuarioData = this.TransformarUsuario(usuarioLogeado.user.uid)
        usuario.uid = nuevousuario.user.uid;
        this.CrearUsuario(usuario, foto).then(ret => {
          this.LogOut();
          resolve(usuario);
        }).catch(err => {
          this.LogOut();
          rejected(err);
        });
      }).catch(err => rejected(err));
    });
  }

  getUid() {
    return this.getUsuario().uid;
  }

  getUsuario() {
    return JSON.parse(localStorage.getItem('usuario'));
  }


  getUsuariosListaEspera() {
    return this.firestore.collection('usuarios').snapshotChanges().pipe(map(cliente => {
      return cliente.map(espera => {
        const data = espera.payload.doc.data() as Cliente;
        data.id = espera.payload.doc.id;
        return data;
      });
    }));
  }

  public CrearUsuario(usuario, foto) {
    return new Promise((resolve, rejected) => {
      this.fireStorage.storage.ref(usuario.uid).putString(foto, 'base64', { contentType: 'image/jpeg' }).then(async () => {
        await this.fireStorage.ref(usuario.uid).getDownloadURL().subscribe(downloadLink => {
          usuario.foto = downloadLink;
          this.firestore.collection('usuarios').add(usuario).then(ret => {
            usuario.id = ret.id;
            resolve(usuario);
          }).catch(err => {
            rejected(err);
          });
        });
      });
    });
  }

  ModificarUsuario(cliente: Cliente) {
    this.firestore.doc('usuarios/' + cliente.id).update(cliente).then()
  }
  BorrarUsuario(cliente: Cliente) {
    this.firestore.doc('usuarios/' + cliente.id).delete().then()
  }

  obtenerCliente(id ){
    console.log(id);
    var param = "uid";
    return this.firestore.collection('usuarios', ref => ref.where(param,'==', id )).valueChanges();
  }

}

