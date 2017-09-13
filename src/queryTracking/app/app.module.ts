import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import {AceBodyModule} from "../../components/ace-body/ace-body.module"
import {AceBtnModule} from '../../components/ace-btn/ace-btn.module'
import {AceChartModule} from '../../components/ace-chart/ace-chart.module'
import {AceTableModule} from '../../components/ace-table/ace-table.module'
import {AceDropdownselectModule} from '../../components/ace-dropdownselect/ace-dropdownselect.module'
import {AceDatePickerModule} from '../../components/ace-date-picker/ace-date-picker.module'
import { DetailComponent } from './detail/detail.component';
import { ViewComponent } from './view/view.component'
import * as $ from 'jquery';



const routes = [
  {
    path:'view',
    component:ViewComponent
  },
  {
    path:'detail',
    component:DetailComponent,
  },
  {
    path:"**",
    redirectTo:"/view"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule, 
    AceBodyModule,
    AceBtnModule,
    AceChartModule,
    AceTableModule,
    AceDatePickerModule,
    AceDropdownselectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
