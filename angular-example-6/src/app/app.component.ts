import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user1Activted:boolean = false;
  user2Activted:boolean = false;
  constructor(private userService:UsersService){

  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.userActivted.subscribe((id:number)=>{
      if(id=== 1){
        this.user1Activted = true;
      }else if(id === 2){
        this.user2Activted = true;
      }
    });
  }
}
