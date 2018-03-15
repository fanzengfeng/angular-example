import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: '万文峰'
    },
    {
      id: 2,
      name: '龚岚'
    },
    {
      id: 3,
      name: 'I LOVE YOU'
    }
  ];
}
