import { DemoAdapter } from './../my-adapter';
import { LoginData } from './../data';
import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  userId = 999;

  public adapter: ChatAdapter = new DemoAdapter();

  constructor() {
   }

  ngOnInit(): void {
   }

}
