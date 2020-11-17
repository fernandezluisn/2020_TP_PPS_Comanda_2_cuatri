import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Consulta } from '../interfaces/Consulta';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private db:AngularFirestore) { }


  createConsulta(Consulta:Consulta): Promise<DocumentReference> {
    return this.db.collection('consultas').add({...Consulta});
  }  

  getConsultas() {
    return this.db.collection('consultas').snapshotChanges().pipe(map(cliente => {
      return cliente.map(espera => {
        const data = espera.payload.doc.data() as Consulta;
        data.id = espera.payload.doc.id;
        return data;
      });
    }));
  }

  updateConsulta(id, consulta){
    this.db.collection('consultas').doc(id).set(consulta);
  }

}
