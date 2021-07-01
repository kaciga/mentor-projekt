import { blogs as b } from './../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {
  single
  constructor(private r: ActivatedRoute, private router: Router) {
    this.getBlog()
  }

  ngOnInit(): void {
  }

  getBlog():void{
    const id = Number(this.r.snapshot.paramMap.get('id'));
    b.map(blog=>{
      if(blog.id===id) this.single=blog
    })
  }

  back():void{
    this.router.navigate(["news"])
  }

}
