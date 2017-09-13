import { RandomUserService } from './service/random-user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { AceDropdownselectModule } from '../components/ace-dropdownselect/ace-dropdownselect.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AceDropdownselectModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [RandomUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
