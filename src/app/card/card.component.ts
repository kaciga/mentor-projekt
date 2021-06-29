import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'k',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card
  @Input() cardData

  constructor() {}

  ngOnInit(): void {
    this.card = this.cardData
  }

}
