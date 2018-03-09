import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
@Injectable()
export class AuthGuardGuard implements CanActivate,CanActivateChild {
  // 路由守卫
  constructor(private authService:AuthService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then((authenticated:boolean)=>{
        if(authenticated){
          return true;
        }else{
          this.router.navigate(['/']);
        }
      });
  }
  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.canActivate(route,state);
  }
}
