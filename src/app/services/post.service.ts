import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  // url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(http: HttpClient) {
    super('https://arcane-plains-11762.herokuapp.com/api/genres', http);
  }
}
