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


  
 //zamora: error en la mesa
 getMesas() {
  return this.db.collection('mesaClientes').snapshotChanges().pipe(map(mesas => {
    return mesas.map(mesa => {
      const data = mesa.payload.doc.data() as MesaCliente;
      data.id = mesa.payload.doc.id;
      return data;
    });
  }));
}

getMesaPorID(idMesa: string) {
  return this.db.collection('mesaClientes').ref.where('id', '==', idMesa).get()
  .then(async pedidos => {
     return await pedidos.docs.map(documento => {
      const data = documento.data() as MesaCliente;
      data.id = documento.id;
      return data;
    });
  });
}

  BorrarMesa(mesa: MesaCliente) {
    this.db.doc('mesaClientes/' + mesa.id).delete().then()
  }
}
