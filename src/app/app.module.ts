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

import { NgChatModule } from 'ng-chat';
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { DevComponent } from './dev/dev.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
//import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
//import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  //interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    P404Component,
    VideocallComponent,
    ReservationComponent,
    HomeComponent,
    CardComponent,
    DevComponent,
    BlogsComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgChatModule,
    AppRoutingModule,
    FullCalendarModule // register FullCalendar with you app
  ],
  providers: [LoginService,LoginData,HttpParams],
  bootstrap: [AppComponent]
})
export class AppModule { }
