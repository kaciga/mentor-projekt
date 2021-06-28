import { LoginService } from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { P404Component } from './p404/p404.component';
import { VideocallComponent } from './videocall/videocall.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { LoginData } from './data';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    P404Component,
    VideocallComponent,
    ReservationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService,LoginData],
  bootstrap: [AppComponent]
})
export class AppModule { }
