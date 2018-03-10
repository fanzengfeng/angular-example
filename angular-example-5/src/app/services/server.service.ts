import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  private servers:{id:number,name:string,status:string}[]= [{
    id: 1,
    name: '万文峰',
    status:'online'
  },{
    id: 2,
    name: '龚岚',
    status:'offline'
  },{
    id: 3,
    name: '爱你',
    status:'online'
  }];
  constructor() { }
  getServers(){
    return this.servers;
  }
  getServer(id:number){
    const server = this.servers.find((s:any)=>{
      return s.id === id;
    });
    return server;
  }
  updateServer(id:number,serverInfo:{name:string,status:string}){
    const server = this.servers.find((s:any)=>{
      return s.id === id;
    });
    if(server){
      server.name  = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
