import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceBodyComponent } from './ace-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AceBodyComponent],
  exports:[AceBodyComponent]
})
export class AceBodyModule { }
