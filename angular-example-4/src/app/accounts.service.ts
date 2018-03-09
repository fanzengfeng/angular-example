import { Injectable,EventEmitter } from '@angular/core';
import {LoggingService} from './logging.service';
@Injectable()
export class AccountsService {
  public accounted:any[]=[{
    name: '万文峰',
    status: 'active'
  },{
    name: '龚岚',
    status: 'inactive'
  },{
    name: 'i love you1',
    status: 'unkonw'
  }]
  public accStatus:EventEmitter<string> = new EventEmitter<string>();
  constructor(private loggingService:LoggingService) { 
  }
  addAccount(name:string,status:string){
    this.accounted.push({name:name,status:status});
    this.loggingService.logStatusChange(status);
  }
  updateStatus(id:number,status:string){
    this.accounted[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}
