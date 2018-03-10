import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {ServerService} from './server.service';
interface Server{
  id:number;
  name: string,
  status:string;
}
@Injectable()
export class ServerResolverService implements Resolve<Server>{

  constructor(private serverService:ServerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Server> | Promise<Server> | Server{
    return this.serverService.getServer(+route.params['id']);
  }
}
