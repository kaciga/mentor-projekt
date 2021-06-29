import { user } from './../environments/environment';
import { Component } from '@angular/core';
import { LoginData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullApp';
  logged:boolean
  people

  constructor(public l:LoginData){
    l.login.subscribe(l=>this.logged=l)
    this.people = user
  }

  logout():void{
    this.l.login.next(false)
    user.login=false
  }
}
