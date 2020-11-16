import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

    constructor(private fcm: FCM, private http: HttpClient) { }

       headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'key=AAAAPeAihMI:APA91bHLdWsfXxe_cwQ9qeWzLY1DIl7KINyt8tYadtt0k3QAjK1X2uvpIMudD6Uoy8b6uQGrb9GCsj80dkp0KTqTNuJE7pv7Q3Sc6ehXaRsNLqOtrOSs1loGj9ulUhvwNIze0tl7DhN2'
      })


       SuscribirANotificacion(notificacion:string){
        this.fcm.subscribeToTopic(notificacion);
      }

       DesuscribirANotificacion(notificacion:string){
        this.fcm.unsubscribeFromTopic(notificacion);
      }

       DesuscribirDeTodas(){
        this.fcm.unsubscribeFromTopic('notificacionMozo');
        this.fcm.unsubscribeFromTopic('notificacionListaEspera');
        this.fcm.unsubscribeFromTopic('notificacionCocina');
        this.fcm.unsubscribeFromTopic('notificacionBar');
        this.fcm.unsubscribeFromTopic('notificacionSupervisor');
        this.fcm.unsubscribeFromTopic('notificacionMozo');
        this.fcm.unsubscribeFromTopic('notificacionDueño');
        this.fcm.unsubscribeFromTopic('notificacionCliente');

      }

       enviarMensaje(titulo:string, texto:string,topic:string){
        let body = {
          "notification":{
            "title": titulo,
            "body": texto,
            "sound":"default",
            "click_action":"FCM_PLUGIN_ACTIVITY",
            "icon":"fcm_push_icon"
          },
            //Un solo ID, topico o grupo
            //"to": to,
            // Multiples IDs
            "to": "/topics/"+topic,
            "priority": "high",
            "restricted_package_name": ""
        }

        return this.http.post("https://fcm.googleapis.com/fcm/send", body, { headers: this.headers }).subscribe();
      }
    
    
    
  }

