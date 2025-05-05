import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; //for api calling
import { Post } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private apiUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  //for DI example
  getMessage(){
    return ["message1", "messgae2", "message3"];
  }

  //for api calling
  getPost(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  //for api calling with interface
  getPost1(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }
}
