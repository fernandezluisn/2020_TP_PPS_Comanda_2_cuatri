import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaClienteService } from 'src/app/servicios/mesa-cliente.service';
import { MesasService } from 'src/app/servicios/mesas.service';

@Component({
  selector: 'app-confirmar-pago',
  templateUrl: './confirmar-pago.page.html',
  styleUrls: ['./confirmar-pago.page.scss'],
})
export class ConfirmarPagoPage implements OnInit {

  mesasAConfirmar  = [];
  mesas;
  constructor(private router: Router, private mesaClienteService: MesaClienteService, private mesaService: MesasService) { }

  ngOnInit() {

    this.mesaService.getMesas().subscribe(mesas => { this.mesas = mesas; 
    })

    this.mesaClienteService.devolverListadoMesas().subscribe((mesas) => {
      mesas.forEach(mesa => {
        if(mesa.estado == "PendienteConfirmarPago")
        this.mesasAConfirmar.push(mesa);
      });
    })

  }


  confirmarPago(mesaCliente){
    mesaCliente.cerrada = true;
    mesaCliente.estado = "cerrado";
this.mesaClienteService.actualizarMesa(mesaCliente);
console.log(mesaCliente);
this.mesas.forEach(async mesa => {
  this.mesasAConfirmar.splice(this.mesasAConfirmar.indexOf(mesaCliente), 1);

  if(mesa.id = mesaCliente.idMesa )
  {
    mesa.estado ="Vacia";
    console.log(mesa);
  this.mesaService.actualizarMesa(mesa);
  }

});
    
  }

}
