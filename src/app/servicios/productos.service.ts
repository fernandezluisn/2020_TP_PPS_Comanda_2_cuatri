import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:Observable<Producto[]>;

  constructor(private db:AngularFirestore) { 
    this.productos=this.db.collection("productos").snapshotChanges().pipe(
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

  createProducto(producto:Producto): Promise<DocumentReference> {
    return this.db.collection('productos').add({...producto});
  }  

  devolverListadoProductos(){
    return this.productos;
  }

  actualizarProducto(prod:Producto) {     
    
    this.db.doc('productos' + '/'+prod.id).update({...prod});    
    
  }
}
