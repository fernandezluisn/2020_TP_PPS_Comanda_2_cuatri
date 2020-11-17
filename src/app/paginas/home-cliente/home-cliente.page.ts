import { MesaCliente } from './../../interfaces/mesa-cliente';
import { Espera } from './../../interfaces/reserva';
import { Pedido } from 'src/app/interfaces/pedido';
import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Mesa } from './../../interfaces/mesa';
import { Reserva } from 'src/app/interfaces/reserva';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { SpinerService } from 'src/app/servicios/spiner.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { MesasService } from 'src/app/servicios/mesas.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { MesaClienteService } from 'src/app/servicios/mesa-cliente.service';
import { FcmService } from 'src/app/servicios/fcm.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ReservasService } from 'src/app/servicios/reservas.service';

@Component({ 
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage {

  fecha=new Date();


  public mesas: Mesa[];
  public reservas: Reserva[];
  public listaEspera: Espera[];
  public mesasClientes: MesaCliente[];
  public usuario: any;
  public mesa: Mesa;
  private pedidos = [];
  private estadoActualCliente;
  cliente;
  chat =false;
  
  constructor(private platform:Platform ,public datePipe: DatePipe,private alert: AlertService, private spinner: SpinnerService, private barcodeScanner: BarcodeScanner, private route: Router,
    private clienteService:AuthService, private mesaService: MesasService, private mesaClienteService: MesaClienteService, private http: HttpClient,
    private fcmService: FcmService, private reservaService:ReservasService) {
    this.cliente = JSON.parse(localStorage.getItem('usuario')); 


    this.mesaService.getMesas().subscribe(mesas => { this.mesas = mesas; 
      this.chequearReservas();

    });



    //obtengo el cliente usando el uid generado con local storage
    console.log(this.cliente);
    this.clienteService.obtenerCliente(this.cliente.uid).subscribe((resp:any) =>{
      resp.forEach(user => {
        console.log(user.estado);
        var id = this.cliente.id;
          this.cliente = user;      
          this.cliente.id = id;
          //chequeo si cambio el estado del cliente para poder darle un mensaje de aviso.
          if(this.cliente.estado == "aceptado" && this.estadoActualCliente == "EnListaDeEspera"){
            this.alert.mensaje("","Ha sido aceptado! ya puede ingresar al local");
          }        
          this.estadoActualCliente = user.estado;     

      });        
    });




    if(this.cliente.estado == "ConMesaAsignada"){
      this.route.navigate(['mesa-cliente'])
    }



  }



  



  //Si el usuario se encuentra en estado "desconectado" va a poder scanear el codigo de ingreso e ingresar a la lista de espera hasta que sea aceptado y pase al siguiente estado
  public async scanearEspera() {

 
    if(localStorage.getItem('Sonido') == 'true')
      {
        let audio = new Audio();
        audio.src = '../assets/click.m4a';
        audio.load();
        audio.play();
      }

this.spinner.showSpinner();
    this.barcodeScanner.scan().then(resultado => {
      let qrValido = false;
      let mesaOcupada = false;

       if(resultado.text == "ListaDeEspera"){
         qrValido = true;
         this.cliente.estado = "EnListaDeEspera"
         this.clienteService.ModificarUsuario(this.cliente);
         this.alert.mensaje('Bienvenido!', 'Usted se encuentra en la lista de espera');
         this.fcmService.enviarMensaje("Nuevo Cliente", "nuevo cliente en lista de espera", "notificacionListaEspera")

       }
      if (!qrValido) {
        this.alert.mensaje('Atención!', 'El QR escaneado no es válido');
      }
this.spinner.hideSpinner();
    });
    
  }


  /*si el usuario ya se encuentra en modo "aceptado" luego de la lista de espera va a poder scanear el qr de la mesa y pasar al
  siguiente estado(ConMesaAsignada) donde podra hacer su pedido.
  */
    public async scanearMesa() {
      if(localStorage.getItem('Sonido') == 'true')
        {
          let audio = new Audio();
          audio.src = '../assets/click.m4a';
          audio.load();
          audio.play();
        }
        this.spinner.showSpinner();
      this.barcodeScanner.scan().then(resultado => {
        let qrValido = false;
        let mesaOcupada = false;
         var mesa;
        //verifico que el QR sea de una mesa
         if(resultado.text.includes("Mesa") || resultado.text.includes("mesa")){
    /*Obtengo la mesa mediante su campo QR, que tiene que tener el mismo valor de una mesa generada y verifico que no este ocupada
          Si no esta ocupada, modifico el estado del usuario y y lo redirecciono a la mesa.*/
          this.mesas.forEach(async mesa => {
            let reserva:Reserva;
            this.reservas.filter(elemen=>{
              if(elemen.mesa.numero==mesa.numero && elemen.estado=="confirmada" && elemen.idCliente==this.cliente.id){
                reserva=elemen;
              }
            })
            if (resultado.text === mesa.qr) {
              qrValido = true;
              if(mesa.estado == "Ocupada" || (mesa.estado=="Reservada" && reserva.idCliente!=this.cliente.id)){
                this.alert.mensaje('', 'La mesa esta ocupada');
              }else if(mesa.estado=="Reservada" && reserva.idCliente==this.cliente.id ){
                mesa.estado = "Ocupada";    
                this.mesaService.actualizarMesa(mesa);
                this.cliente.estado = "ConMesaAsignada"
                this.clienteService.ModificarUsuario(this.cliente);       
                this.alert.mensaje('', 'Ya puede sentarse en la mesa seleccionada!!');
                reserva.estado=="expirada";
                this.reservaService.updateReserva(reserva);
                let r=new MesaCliente(mesa.id,this.cliente.id,mesa.qr);
                this.mesaClienteService.createMesaCliente(r);
                this.mesaClienteService.devolverListadoMesas().subscribe(lista=>{
                  lista.filter(el=>{
                    if(el.idCliente==this.cliente.if && mesa.id==el.idMesa)
                    localStorage.setItem('mesaClienteID', JSON.stringify(el.id));
                  })
                });
                this.route.navigate(['mesa-cliente']);  
              }
              else{           
                mesa.estado = "Ocupada";    
                this.mesaService.actualizarMesa(mesa);
                this.cliente.estado = "ConMesaAsignada"
                this.clienteService.ModificarUsuario(this.cliente);       
                this.alert.mensaje('', 'Ya puede sentarse en la mesa seleccionada!!');
                let r=new MesaCliente(mesa.id,this.cliente.id,mesa.qr);
                this.mesaClienteService.createMesaCliente(r);
                this.mesaClienteService.devolverListadoMesas().subscribe(lista=>{
                  lista.filter(el=>{
                    if(el.idCliente==this.cliente.if && mesa.id==el.idMesa)
                    localStorage.setItem('mesaClienteID', JSON.stringify(el.id));
                  })
                });
                this.route.navigate(['mesa-cliente']);      
                }           

            }
          })
          
      
   /*
          this.mesaService.obtenerMesaQr(resultado.text).subscribe((resp:any) =>{
            resp.forEach(mesa => {
              if(mesa.estado == "Ocupada"){
                this.alert.mensaje('', 'La mesa esta ocupada');
              }
              else{
                mesa.estado = "Ocupada";    
                this.mesaService.actualizarMesa(mesa);
                this.cliente.estado = "ConMesaAsignada"
                this.clienteService.ModificarUsuario(this.cliente);       
                this.alert.mensaje('', 'Ya puede sentarse en la mesa seleccionada!!');
                this.route.navigate(['mesa-cliente']);      
                }           
           });      
                     });
  */
         }

          else {
            this.alert.mensaje('QR Erroneo', 'El QR no pertenece a una mesa. Por favor, escanee el código de la mesa');
          }
         
        if (!qrValido) {
          this.alert.mensaje('Atención!', 'El QR escaneado no es válido');
        }
        this.spinner.hideSpinner();
  
      });
    }

    salir(){
      this.clienteService.LogOut();
      this.route.navigate(['log-in']);
    }

    chequearReservas(){
      
      let fech1=this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
    let fech2=this.datePipe.transform(this.fecha, 'yyyy-MM-dd');
    this.fecha.setMinutes(this.fecha.getMinutes()-40);
    let resD:Reserva[]=new Array();      
    
    this.reservaService.getReservas().subscribe(list=>{
      list.filter(res=>{
        if(res.fecha==fech1 && res.estado=="confirmada"){
          resD.push(res);
        }else if(Number(Date.parse( res.fecha2))<Number(Date.parse( fech2)) && res.estado!="expirada"){
          res.estado="expirada";
          this.reservaService.updateReserva(res);
        }
      })
      this.reservas=resD;
        resD.forEach(resDia=>{
          let hor=new Date(resDia.fecha+" "+resDia.hora);          
          if(hor>this.fecha){
            this.mesas.filter(mesa=>{
              if(mesa.numero==resDia.mesa.numero && mesa.estado=="Vacia" && resDia.situacion=="a reservar"){
                mesa.estado="Reservada";              
                this.mesaService.actualizarMesa(mesa);
                resDia.situacion="hecha";
                resDia.mesa=mesa;
                this.reservaService.updateReserva(resDia);
                this.fcmService.enviarMensaje("Mesa"+mesa.numero, "Le informamos que se encuentra reservada la mesa "+mesa.numero, 'notificacionListaEspera');
              }else if(mesa.numero==resDia.mesa.numero && mesa.estado=="Ocupada" && resDia.situacion=="a reservar"){
                this.fcmService.enviarMensaje("Mesa"+mesa.numero, "Le informamos que se encuentra reservada la mesa "+mesa.numero+", debe desocuparla en un plazo menor a 40 minutos.", 'notificacionListaEspera');

              }
            })
          }
        })
      })
      
    }

    Mover(lugar){
      this.route.navigate([lugar])
    }

}
