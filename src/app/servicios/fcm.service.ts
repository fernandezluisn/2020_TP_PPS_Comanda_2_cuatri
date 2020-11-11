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
        'Authorization': 'key=AAAA0TsmZ2E:APA91bGT3AsRQz1SWKT_lIaUxFeweYs-KStunNKIeJFWjg3l-KzU9GldGdwGvy_ZfF1y1ig9774bk5lvm1S6aCrOq4SLLh0H3CmOuS354CtX55cBIH0EUI9gvfwbAqtF2GXmulyamUvo'
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

