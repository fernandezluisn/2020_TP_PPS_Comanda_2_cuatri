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
          this.cliente = user;      

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
         this.fcmService.enviarMensaje("Prueba Scan QR", "Prueba Scan QR", "all")

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
            if (resultado.text === mesa.qr) {
              qrValido = true;
              if(mesa.estado == "Ocupada" || mesa.estado=="Reservada"){
                this.alert.mensaje('', 'La mesa esta ocupada');
              }
              else{           
                mesa.estado = "Ocupada";    
                this.mesaService.actualizarMesa(mesa);
                this.cliente.estado = "ConMesaAsignada"
                this.clienteService.ModificarUsuario(this.cliente);       
                this.alert.mensaje('', 'Ya puede sentarse en la mesa seleccionada!!');
                this.mesaClienteService.createMesaCliente(new MesaCliente(mesa.id,this.cliente.id,mesa.qr));
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
      
      let fech=this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
      this.fecha.setMinutes(this.fecha.getMinutes()-40);
      let resD:Reserva[]=new Array();      
      
      this.reservaService.getReservas().subscribe(list=>{
        list.filter(res=>{
          
          if(res.fecha==fech){
            resD.push(res);
          }
        })
  
        resD.forEach(resDia=>{
          let hor=new Date(resDia.fecha+" "+resDia.hora);          
          if(hor>this.fecha){
            this.mesas.filter(mesa=>{
              if(mesa.numero==resDia.mesa.numero && mesa.estado=="Vacia"){
                mesa.estado="Reservada";              
                this.mesaService.actualizarMesa(mesa);
                resDia.mesa=mesa;
                this.reservaService.updateReserva(resDia);
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
