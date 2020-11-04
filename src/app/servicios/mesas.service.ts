import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Mesa } from '../interfaces/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  mesas:Observable<Mesa[]>;

  constructor(private db:AngularFirestore) { 
    this.mesas=this.db.collection("mesas").snapshotChanges().pipe(
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


 
  getMesas() {
    return this.db.collection('mesas').snapshotChanges().pipe(map(mesas => {
      return mesas.map(mesa => {
        const data = mesa.payload.doc.data() as Mesa;
        data.id = mesa.payload.doc.id;
        return data;
      });
    }));
  }


  createMesa(mesa:Mesa): Promise<DocumentReference> {
    return this.db.collection('mesas').add({...mesa});
  }  

  devolverListadoMesas(){
    return this.mesas;
  }

  actualizarMesa(mesa:Mesa) {     
    
    this.db.doc('mesas' + '/'+mesa.id).update({...mesa});    
    
  }

  BorrarMesa(mesa: Mesa) {
    this.db.doc('mesas/' + mesa.id).delete().then()
  }


  obtenerMesaQr(qr ){
 //   return this.db.collection<T>("mesas", ref => ref.where(param,'==', qr )).valueChanges({idField: 'identificador'});

    var param = "qr";
    return this.db.collection('mesas', ref => ref.where(param,'==', qr)).valueChanges();
  }
}
