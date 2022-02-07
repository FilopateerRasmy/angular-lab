import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface authResponse {
  user:{name:string};
  token:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(registerationInfo:{name:string; email:string; password:string}):Observable<authResponse>{
   return this.http.post<authResponse>(`https://jobs-api-filopateer.herokuapp.com/api/v1/auth/register`, registerationInfo)
  }
}
