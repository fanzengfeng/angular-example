import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {UnlessDirective} from './unless.directive';
import { BasicHighightDirective } from './basic-highight.directive';
import { BetterHighightDirective } from './better-highight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    BasicHighightDirective,
    BetterHighightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
