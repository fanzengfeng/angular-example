import { Component } from '@angular/core';
import {ServerService} from './server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.server.getAppName();
  servers:{name:string,capacity:number,id:any}[] =[{
    name: '万文峰',
    capacity: 10,
    id: this.getnerateId
  },{
    name: '龚岚',
    capacity: 11,
    id: this.getnerateId()
  }];
  constructor(private server:ServerService){}
  onAddServer(name:string){
    this.servers.push({
      name:name,
      capacity: 50,
      id: this.getnerateId()
    });
  }
  onSave(){
    this.server.storeServers(this.servers)
      .subscribe((response)=>{console.log(response)},(error)=>{console.log(error)});
  }
  onGet(){
    this.server.getServers()
      .subscribe((response)=>{console.log(response),(error)=>{console.log(error)}});
  }
  private getnerateId(){
    return Math.round(Math.random() * 10000);
  }
}
