import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElevesComponent } from './eleves/eleves.component';
import { ElevesService } from './eleves/eleves.services';


@NgModule({
  declarations: [
    AppComponent,
    ElevesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ElevesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
