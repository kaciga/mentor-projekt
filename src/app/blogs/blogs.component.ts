import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { blogs as bs } from 'src/environments/environment';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
blogs
url
  constructor(private route: Router) {
    this.blogs=bs
  }

  ngOnInit(): void {
  }

  setUrl(id): void {
    this.route.navigate([`news/${id}`])
  }
}
