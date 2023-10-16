import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http"
import { CommonServiceTsService } from './common.service.ts.service';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CommonServiceTsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
