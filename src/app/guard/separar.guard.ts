import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';

import { Router } from "@angular/router";
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SepararGuard implements CanActivate {

  constructor(private AFauth : AngularFireAuth,
    private router: Router,
    private auth:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.AFauth.authState.pipe(map( auth => {
        if(isNullOrUndefined(auth)){
          this.router.navigate(['/log-in']);
          return false
        }else{
          let usuario = this.auth.getUsuario();
          console.log(usuario['perfil']);
          
       switch (usuario['perfil']) {
       
         case 'mozo':
           this.router.navigate(['home-mozo']);
           break;
         case 'metre':
           this.router.navigate(['home-metre']);
           break;
         case 'delivery':
             this.router.navigate(['home-delivery']);
             break;
         case 'cocina':
         case 'bar':
           this.router.navigate(['home-cocina']);
           break;
         case 'cliente':
         case 'anonimo':
           this.router.navigate(['home-cliente']);
           break;
         case 'supervisor':
         case 'dueño':
             this.router.navigate(['home-supervisor']);
           break;
         default:
             this.router.navigate(['log-in']);

           break;
       }
          return true
        }
        
         return false;
      }))

  
  }
}