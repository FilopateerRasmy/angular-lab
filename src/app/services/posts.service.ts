import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../Shared-classes-and-types/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getAllposts():Observable<IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getPost(id:number):Observable<IPost>{
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
