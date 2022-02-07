import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerInfo = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    hearAboutUs: ''
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onRegister(){
    this.authService.register(this.registerInfo).subscribe(
      {
        next:(result)=>{
          console.log(result)
          
          localStorage.setItem("user",JSON.stringify({email:this.registerInfo.email, passsword:this.registerInfo.password, name:this.registerInfo.name}))
        },
        error:(err)=> console.log(err)
      }
    )
  }
}
