import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  appStatus:any = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('test');
    },2000);
  });
  servers: {instanceType:string,name:string,status:string,started:Date}[] = [{
    instanceType: 'medium',
    name: '商品',
    status: '开启',
    started: new Date(15,1,2017)
  },{
    instanceType: '美团',
    name: '视频',
    status: '开启',
    started: new Date(18,1,2017)
  }];
  filteredStatus: string = '';
  constructor(){

  }
  getStatusClasses(server:{instanceType:string,name:string,status:string,started:Date}){
    return{
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-error': server.status === 'critical'
    };
  }
  onAddServer(){
    this.servers.push({
      instanceType: '鸡蛋',
      name: '新服务',
      status: 'stable',
      started: new Date(15,2,2018)
    });
  }
}
