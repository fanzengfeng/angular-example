import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { ServerComponent } from '../servers/server/server.component';
import { AuthGuardGuard } from '../auth-guard.guard';
import { ServersComponent } from '../servers/servers.component';
import { ServerResolverService } from '../services/server-resolver.service';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';
const appRoutes:Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'servers',
  component: ServersComponent,
  // canActivate: [AuthGuardGuard],
  canActivateChild: [AuthGuardGuard],
  children: [{
    path: ':id',
    component: ServerComponent,
    resolve: {server:ServerResolverService}
  },{
    path: ':id/:edit',
    component: EditServerComponent,
    canActivate: [CanDeactivateGuardService]
  }]
},{
  path:'users',
  component:UsersComponent,
  children:[{
    path: ':id/:name',
    component: UserComponent
  }]
},{
  path: 'not-found',
  component: ErrorPageComponent,
  data: {message: '没有找到页面'}
},{
  path: '**',
  redirectTo: '/not-found'
}]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
