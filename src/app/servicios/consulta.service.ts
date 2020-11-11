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
}
