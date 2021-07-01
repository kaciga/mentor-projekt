import { DevComponent } from './dev/dev.component';
import { LoginService } from './login.service';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { VideocallComponent } from './videocall/videocall.component';
import { P404Component } from './p404/p404.component';
import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'chat',component:ChatComponent, canActivate: [LoginService]},
  {path:'res',component:ReservationComponent, canActivate: [LoginService]},
  {path:'video',component:VideocallComponent, canActivate: [LoginService]},
  {path:'dev',component:DevComponent},
  {path:'news',component:BlogsComponent},
  {path:'news/:id',component:SingleBlogComponent},
  {path:'**',component:P404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
