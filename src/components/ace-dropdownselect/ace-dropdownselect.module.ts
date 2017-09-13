import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceDropdownselectComponent } from './ace-dropdownselect.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AceDropdownselectComponent],
  exports:[AceDropdownselectComponent]
})
export class AceDropdownselectModule { }
