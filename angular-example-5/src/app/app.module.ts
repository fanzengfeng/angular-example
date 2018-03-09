import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
// service
import {AuthGuardGuard} from './auth-guard.guard';
import {AuthService} from './auth.service';
import {CanDeactivateGuardService} from './services/can-deactivate-guard.service';
import {ServerService} from './services/server.service';
import {ServerResolverService} from './services/server-resolver.service';
// component
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    PageNotFoundComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuardGuard,AuthService,CanDeactivateGuardService,ServerService,ServerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
