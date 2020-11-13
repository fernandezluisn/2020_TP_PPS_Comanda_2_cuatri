import { Component, OnInit } from '@angular/core';
import { EmailComposerOptions, EmailComposer } from '@ionic-native/email-composer/ngx';
import { Cliente } from 'src/app/interfaces/usuario';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceptar-cliente',
  templateUrl: './aceptar-cliente.page.html',
  styleUrls: ['./aceptar-cliente.page.scss'],
})
export class AceptarClientePage implements OnInit {
  clientes: any= [];
  constructor( private clienteServe:AuthService,private emailComposer: EmailComposer, private alert:AlertService, private route:Router, private auth:AuthService) {}

  ngOnInit() {
    this.clienteServe.GetUsuariosPorAceptar().then(clientes=>{
        this.clientes = clientes;
     //timer(3000).subscribe(()=>{this.TomarUsuarios();
    //})
      console.log(clientes)
    })

  }

  TomarUsuarios() {
    if(this.clienteServe.getUsuario()['perfil']){
      this.clienteServe.GetUsuariosAceptar().then(clientes=>{
          this.clientes = clientes;
        console.log(clientes)
        timer(10000).subscribe(()=>{this.TomarUsuarios();})
      })
    }

  }

  AceptarCliente(cliente){
    cliente.activo = true;
    this.clienteServe.ModificarUsuario(cliente);
    this.SendAcceptedEmail(cliente);
    this.ngOnInit()

  }

  SendAcceptedEmail(cliente:Cliente) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send

      }
    });
    this.alert.mensaje("Cliente Aceptado","")
    let email:EmailComposerOptions = {
      to: cliente.mail,
      cc: '',
      bcc: [],
      attachments: [
      ],
      subject: 'Comanda: Tu cuenta ha sido aceptada',
      body: 'Por favor accede a nuestra aplicacion para poder ingresar a tu cuenta',
      isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email).then(ret => { console.log(ret) }).catch(err => { console.log(err); });
    this.route.navigate(['home-supervisor']);
  }

  SendNotAcceptedEmail(cliente:Cliente) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send

      }
    });
    let email:EmailComposerOptions = {
      to: cliente.mail,
      cc: '',
      bcc: [],
      attachments: [
      ],
      subject: 'Comanda: Tu cuenta no ha sido aceptada',
      body: 'Usted no ha sido aceptado para ser cliente del restaurante.',
      isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email).then(ret => { console.log(ret) }).catch(err => { console.log(err); });

  }

  BorrarCliente(cliente){
    this.clienteServe.BorrarUsuario(cliente)
    this.alert.mensaje("Cliente Borrado","")
    this.ngOnInit()
    // console.log(this.clientes.findIndex(cliente))
  }

  salir(){
    this.auth.LogOut();
    this.route.navigate(['log-in']);
  }

}
