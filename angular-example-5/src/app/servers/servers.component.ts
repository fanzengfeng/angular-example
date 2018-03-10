import { Component, OnInit } from '@angular/core';
import {ServerService} from '../services/server.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers:{id:number,name:string}[] = [];
  constructor(private server:ServerService,private router:Router,private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.server.getServers()
  }
  onReload(){
    this.router.navigate(['servers'],{relativeTo:this.activeRouter});
  }
}
