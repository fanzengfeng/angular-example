import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private log:LoggingService,private acc:AccountsService) {
    this.acc.accStatus.subscribe((status:string)=>{alert(status)});
   }
  onCreateAccount(name:string,status:string){
    this.acc.addAccount(name,status);
    this.log.logStatusChange(status);
  }
  ngOnInit() {
  }

}
