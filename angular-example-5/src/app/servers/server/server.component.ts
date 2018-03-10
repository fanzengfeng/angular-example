import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router,Data} from '@angular/router';
import {ServerService} from '../../services/server.service';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public server: {id:number,name:string,status:string};
  constructor(private router:Router,private route:ActivatedRoute,private serverService:ServerService) { }

  ngOnInit() {
    this.route.data.subscribe((data:Data)=>{
      this.server = data['server'];
    });
  }
  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});
  }

}
