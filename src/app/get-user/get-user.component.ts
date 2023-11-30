
import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})

export class UserComponent implements OnInit {

  users: User[] = [];
  selectedName: string=" ";
  constructor(private userService: UserService) { 
    this.getAllUsers();
  }

  ngOnInit(): void {  
  }
  getAllUsers() {
    this.userService.getUser().subscribe(response => {
      let usersList = Object.entries(response).map(([key,value],index) => {
        return value;
      });
      this.users = usersList;
    });
  }
  search() {
    console.log(this.selectedName);
    if(this.selectedName==="all") {
      this.getAllUsers();
    } else {
      this.users = this.users.filter(user => user.name === this.selectedName);
    }
  }
 
}
