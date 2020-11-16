import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { EncuestaCliente } from '../interfaces/encuesta';
import { Observable } from 'rxjs';
import { EncuestaEmpleado } from '../interfaces/encuestaEmpleado';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService { 

    encuestasEmpleados:Observable<EncuestaEmpleado[]>;

    constructor(private db: AngularFirestore) {
      this.encuestasEmpleados=this.db.collection('encuestas-empleados').snapshotChanges().pipe(
        map(actions=>{
          return actions.map(
            a=>{
              const data= a.payload.doc.data();
              const id=a.payload.doc.id;
              return {id, ...(data as any)}
            }
          );
        }
    
        )
    
       
      );
    }

  addEncuesta(encuesta: EncuestaCliente) {
    return new Promise((resolve, rejected) => {
      this.db.collection('encuestas-cliente').add(encuesta).then(ret => {
        resolve(ret);
      }).catch(err => {
        rejected(err);
      });
    });
  }
  public addEncuestaEmpleado(encuesta:EncuestaEmpleado): Promise<DocumentReference> {
    return this.db.collection('encuestas-empleados').add({...encuesta});    
  }
  
    
    

  public addEncuestaDueño(encuesta) {
    return new Promise((resolve, rejected) => {
      this.db.collection('encuestas-dueño').add(encuesta).then(ret => {
        resolve(ret);
      }).catch(err => {
        rejected(err);
      });
    });
  }

  GetEncuestasClientes() {
    return this.db.collection('encuestas-cliente').get().toPromise();
  }

  GetEncuestasEmpleados() {
    return this.encuestasEmpleados;
  }

}
