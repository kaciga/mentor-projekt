import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import { LoginData } from './data';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  logged:boolean
  constructor(public ld: LoginData) {
    ld.login.subscribe(v=>this.logged=v)
   }

  canActivate() {
    return this.logged;
  }
}
