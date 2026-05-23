import { MyHttpService } from './myHttpService';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PostService extends MyHttpService{
  //private url ;
  constructor(http: Http) {
    super("https://jsonplaceholder.typicode.com/posts",http);
   }

}
