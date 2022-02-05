import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../Shared-classes-and-types/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList!:IUser[];
  errMsg:string = ''
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users =>{
      this.userList = users
    }, (err)=>{
      console.log(err)
      this.errMsg = err.message;
    })
  }

}
