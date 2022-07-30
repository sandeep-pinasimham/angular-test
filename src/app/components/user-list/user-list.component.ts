import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private _userservice: UserService) {}
  usersList: Users[] = [];

  userDeatilsData: any={};
  ngOnInit() {
    this._userservice.getAllUsers().subscribe((users) => {
      console.log(users);
      this.usersList = users;
    });
  }

  sendDataToDetails = (data) => {
    console.log(data);

    this.userDeatilsData = data;
  };
}
