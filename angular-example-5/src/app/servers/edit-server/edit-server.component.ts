import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ServerService} from '../../services/server.service';
import {CanComponentDeactivate} from '../../services/can-deactivate-guard.service';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate{
  server: {id:number,name:string,status:string};
  serverName:string = '';
  serverStatus:string = '';
  allowEdit:boolean = false;
  changeSaved:boolean = false;
  constructor( private serverService:ServerService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe((queryParams:Params)=>{
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.serverStatus;
  }
  onUpdateServer(){
    this.serverService.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus});
    this.changeSaved = true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }
    if(this.serverName !== this.server.name || this.serverStatus !== this.server.status && !this.changeSaved){
      return confirm('是否改变');
    }else{
      return true;
    }
  }
}
