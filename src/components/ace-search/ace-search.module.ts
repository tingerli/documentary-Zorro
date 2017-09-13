import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceSearchComponent } from './ace-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AceSearchComponent],
  exports:[AceSearchComponent]
})
export class AceSearchModule { }
