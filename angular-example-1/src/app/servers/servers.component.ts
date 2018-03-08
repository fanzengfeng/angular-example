import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private allowNewServer:boolean = false;
  private serverCreationStatus:string = 'No Server was created!';
  private serverName:string = '万文峰';
  private serverCreated:boolean = false;
  private servers:any = ['万文风','001'];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }
  onCreatedServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = '名字是'+this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
