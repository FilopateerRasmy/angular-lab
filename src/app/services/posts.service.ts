import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComments } from '../Shared-classes-and-types/icomments';
import { IPost } from '../Shared-classes-and-types/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getAllposts():Observable<IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getPost(id:number):Observable<IComments[]>{
    return this.http.get<IComments[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
