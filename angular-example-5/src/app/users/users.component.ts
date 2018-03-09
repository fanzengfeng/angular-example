import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: Object[] = [{
    id: 1,
    name: '万'
  },{
    id: 2,
    name: '文'
  },{
    id: 3,
    name: '峰'
  }];
  constructor() { }

  ngOnInit() {
  }

}
