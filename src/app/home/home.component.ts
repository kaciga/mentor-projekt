import { HttpService } from './../http.service';
import { Post } from './../post';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { developers as d, cards as c } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgs=new Array(8)
  developers

  loader:boolean=false
  post:Post
  cards
  constructor(private r: Router, private hs: HttpService) {
    this.cards = c
    this.developers = d
   hs.getPostFromJsonplaceholder().then(d=>{
     console.log(d);

   })
  }

  ngOnInit(): void {
  }
  openDev(dev):void{
    const queryParams = { id: dev.id+'' };
      this.r.navigate(["dev"],{
        queryParams: queryParams,
      })
  }
}
