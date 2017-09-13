import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import dropdownSelect from './dropdownSelect.min.js';

@Component({
  selector: 'ace-search',
  templateUrl: './ace-search.component.html',
  styleUrls: ['./ace-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AceSearchComponent implements OnInit {

  @Input() target: any;
  @Input() ajaxUrl: any;
  @Input() ajax: any;
  @Input() selectData: any;
  @Input() multiple: any;
  @Input() width: any;
  @Input() visCount:any;
  @Input() pageSize:any;

  private response: any;
  private value:any;

  @Output()
  render = new EventEmitter();

  @Output()
  optionClick = new EventEmitter();

  constructor() { }

  ngOnInit() {

    var self = this;
    var multipleSetSelect = new dropdownSelect(this.target, {
      multiple: this.multiple,
      width: this.width,
      visCount:this.visCount,
      pageSize:this.pageSize,
      noDataText: '按enter键搜索',
      notFoundText: '无匹配记录',
      onOptionClick: function (value) {
        self.value = value;
        self.optionChange();
      },
      ajaxUrl: this.ajaxUrl,
      ajax: this.ajax,
      afterFetch: function (res) {
        self.response = res;
        self.increase();
        setTimeout(function () {
          multipleSetSelect.setDropdown(self.selectData);
        })
      }
    });


  }

  increase() {
    this.render.emit(this.response);
  }

  optionChange(){
    this.optionClick.emit(this.value);
  }
}
