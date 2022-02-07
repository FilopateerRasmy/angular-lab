import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }
  responseMsg=''
  constructor() { }

  ngOnInit(): void {
  }
  login() {

   const userInfo = JSON.parse(localStorage.getItem('user') || "");
    console.log(userInfo)
   if(userInfo.email == this.credentials.email && userInfo.passsword === this.credentials.password){
    this.responseMsg = userInfo.name;
   }else{
     this.responseMsg= '';
   }


  }
}
