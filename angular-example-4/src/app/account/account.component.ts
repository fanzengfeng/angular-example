import { Component, OnInit,Input } from '@angular/core';
import {AccountsService} from '../accounts.service';
import {LoggingService} from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account:{name:string,status:string};
  @Input() id:number;
  constructor(private acc:AccountsService,private log:LoggingService) { }
  onSetTo(status:string){
    this.acc.updateStatus(this.id,status);
    this.acc.accStatus.emit(status);
    this.log.logStatusChange(status);
  }
  ngOnInit() {
  }

}
