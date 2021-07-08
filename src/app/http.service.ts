import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string='https://jsonplaceholder.typicode.com/posts/1'
  constructor(private http: HttpClient) { }

  async getPostFromJsonplaceholder() {
    return await this.http.get<Post>(this.url).toPromise()
  }
}
