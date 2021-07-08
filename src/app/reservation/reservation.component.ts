import { Res } from './event';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  ress:Array<Res> = []

  config: object = {
    startEnd: false,
    someDayEvent: false
  }

  checkConfig(key: string): boolean {
    return this.config[key]
  }

  checkEvent() :boolean{
    return this.checkConfig('startEnd')
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor() {
    console.log();


    }

  ngOnInit(): void {
    let i = 0
      while(i<100){
        this.ress.push(new Res({id:i,title: i + "aa", start: new Date(), end: new Date()}))
        i++
      }
      console.log(this.ress);

  }

}
