import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MesaCliente } from '../interfaces/mesa-cliente';

@Injectable({
  providedIn: 'root'
})
export class MesaClienteService {

  mesas:Observable<MesaCliente[]>;

  constructor(private db:AngularFirestore) { 
    this.mesas=this.db.collection("mesaClientes").snapshotChanges().pipe(
      map(actions=>{
        return actions.map(
          a=>{
            const data= a.payload.doc.data();
            const id=a.payload.doc.id;
            return {id, ...(data as any)}
          }
        );
      })   
    );
  }

  createMesaCliente(mesa:MesaCliente): Promise<DocumentReference> {
    return this.db.collection('mesaClientes').add({...mesa});
  }  

  devolverListadoMesas(){
    return this.mesas;
  }

  actualizarMesa(mesa:MesaCliente) {     
    
    this.db.doc('mesaClientes' + '/'+mesa.id).update({...mesa});    
    
  }

  BorrarMesa(mesa: MesaCliente) {
    this.db.doc('mesaClientes/' + mesa.id).delete().then()
  }
}
