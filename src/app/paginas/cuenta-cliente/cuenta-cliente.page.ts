import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { Pedido } from 'src/app/interfaces/pedido';
import { MesaCliente } from './../../interfaces/mesa-cliente';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { MesaClienteService } from 'src/app/servicios/mesa-cliente.service';

@Component({
  selector: 'app-cuenta-cliente',
  templateUrl: './cuenta-cliente.page.html',
  styleUrls: ['./cuenta-cliente.page.scss'],
})
export class CuentaClientePage implements OnInit {

  constructor(private router: Router, private pedidoService:PedidosService, private alertService: AlertService, private spinnerService: SpinnerService,
    private clienteService:AuthService, private mesaClienteService: MesaClienteService) { }
    private   cliente;
    pedidos = [];
    private   propina;
    idMesa;
    mesaCliente;
    //TODO calcular total..
    total = 100;
    TotalMasPropina;
  ngOnInit() {

    this.cliente = JSON.parse(localStorage.getItem('usuario')); 
    if(isNaN(this.propina)){
      console.log("es nan" + this.propina)
      this.propina  = 0;
    }

    this.clienteService.obtenerCliente(this.cliente.uid).subscribe((resp:any) =>{
      resp.forEach(user => {
        console.log(user.estado);
        var id = this.cliente.id;
          this.cliente = user;      
          this.cliente.id = id;

          this.pedidoService.getPedidos().subscribe((pedidos) => {
            console.log(pedidos);
            console.log(user)

            //TODO-> Confirmar que el pedido es el actual bajo su estado.
            pedidos.forEach(pedido => {
                      if(pedido.email ==user.mail )
                      this.pedidos.push(pedido);
                       });
            });   

            this.mesaClienteService.devolverListadoMesas().subscribe((mesas) => {
  
              mesas.forEach(mesa => {
                        if(mesa.idCliente ==user.id  && mesa.cerrada == false)
                        {
                        this.propina = mesa.propina;
                        if(this.propina == undefined)
                        this.propina = 0;
                        this.idMesa = mesa.id;
                        this.mesaCliente = mesa;

                        if(this.propina != 0)
                        this.TotalMasPropina =  this.total * (this.propina);
                        else
                        this.TotalMasPropina =  this.total;
                      }
                         });
              });   
  


      
      });        
  })
}


darPropina()
{
  if(localStorage.getItem('Sonido') == 'true')
  {
    let audio = new Audio();
    audio.src = '../assets/click.m4a';
    audio.load();
    audio.play();
  }

    this.router.navigate(['propina/'+ this.idMesa]);
  }


  Pagar(){
    this.cliente.estado = "desconectado";
    this.clienteService.ModificarUsuario(this.cliente);
  
    this.mesaCliente.estado = "PendienteConfirmarPago";
    this.mesaCliente.pago = this.TotalMasPropina;
    this.mesaClienteService.actualizarMesa(this.mesaCliente);
    this.router.navigate(['log-in']);
  }


}
