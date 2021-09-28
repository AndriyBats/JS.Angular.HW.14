import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework14Component } from './homework14/homework14.component';
import { Homework14ChildComponent } from './homework14/homework14-child/homework14-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework14Component,
    Homework14ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
