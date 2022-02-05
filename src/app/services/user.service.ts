import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Shared-classes-and-types/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
}
