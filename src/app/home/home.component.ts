import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards:Array<object>=[
    {title:'home',link:'/',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque vestibulum lorem ac facilisis. Etiam ornare, felis sed consectetur efficitur, neque ipsum facilisis nisi, a dapibus justo nunc a massa. Praesent sagittis dui tellus, et iaculis est ornare sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla nec mi elementum, sodales nulla vitae, dictum lorem. Cras vestibulum dui urna, in imperdiet lectus elementum sed. Vestibulum porttitor quam sem, et finibus ligula rhoncus id. Nullam pulvinar justo sed pretium ornare. Nullam condimentum interdum pharetra. Quisque eu accumsan mauris, et scelerisque nisl. Quisque consequat porttitor elit, nec molestie orci aliquam at. Phasellus porta quis tellus eget rutrum. Proin nec tortor eget ipsum cursus rutrum eget sit amet ex.',btnTitle:'Go To'},
    {title:'chat',link:'/chat',content:'Aenean pulvinar, arcu nec fermentum ornare, ante massa aliquam dui, et posuere odio quam rhoncus metus. Mauris rutrum, odio eget vehicula rhoncus, erat dui euismod ligula, sed porttitor tortor ante sit amet ante. Nullam interdum egestas purus at commodo. Aliquam in volutpat nulla. Duis sem diam, aliquet ut tristique quis, faucibus at libero. Donec nec mi eget odio facilisis semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam luctus purus id leo vulputate sagittis. Praesent tincidunt pulvinar malesuada. Nam nulla turpis, sodales at tellus at, pharetra egestas mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer id venenatis est. Integer molestie erat ac mollis suscipit. Vestibulum pellentesque orci nulla, a blandit sem lobortis non.',btnTitle:'Megnyit'},
    {title:'reservation',link:'/res',content:'Cras cursus, arcu nec feugiat maximus, lorem lorem maximus mi, vel tincidunt libero arcu finibus velit. Nunc tellus nulla, hendrerit fermentum porttitor sed, pellentesque eget sapien. Nullam at dignissim erat. Nullam a erat urna. Fusce consectetur odio eget nunc finibus, sit amet condimentum nisi accumsan. Nullam non arcu magna. Morbi non congue enim, ut tincidunt nulla. Morbi nulla lacus, placerat eu maximus non, auctor eget lorem. Integer tincidunt semper maximus. Proin placerat vulputate orci, eget blandit lacus scelerisque sed. Quisque tristique libero nec ipsum pellentesque lobortis. Mauris sit amet congue purus. Nulla vulputate at ante sed rutrum. Nulla velit erat, eleifend vitae auctor eu, scelerisque vel velit. Etiam condimentum dapibus eros, pulvinar venenatis tellus pulvinar eu. Aliquam volutpat ullamcorper ipsum sit amet euismod.',btnTitle:'Irány'},
    {title:'video call',link:'/video',content:'Maecenas bibendum ac nibh quis porta. Curabitur eget dapibus mi. Aliquam felis lorem, consequat sed porttitor eu, fringilla id turpis. Suspendisse potenti. Sed condimentum blandit quam, non elementum dolor auctor ut. Morbi risus quam, placerat quis enim quis, dapibus rhoncus augue. Mauris eu condimentum tellus. Phasellus sit amet justo ut felis ullamcorper consectetur nec blandit metus.',btnTitle:'Gyerünk'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
