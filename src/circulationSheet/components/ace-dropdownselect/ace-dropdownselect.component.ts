import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, AfterViewInit,
   OnDestroy, ElementRef, OnChanges } from '@angular/core';
import dropdownSelect from './dropdownSelect.min.js';

@Component({
  selector: 'ace-dropdownselect',
  templateUrl: './ace-dropdownselect.component.html',
  styleUrls: ['./ace-dropdownselect.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AceDropdownselectComponent implements AfterViewInit, OnDestroy, OnChanges {
  constructor(
    public el:ElementRef
  ) {
    var num: string = "";
    for (var i = 0; i < 10; i++) {
      num = num + Math.floor(Math.random() * 10)
    }
    this.eleId = "ace-dropdown" + num;
  }

  // _mydata: Array<any> = [];//传进来的数据
  // @Input()
  // set dataSource(val: Array<any>) {//传进来的数据
  //   this._mydata = val;
  //   if (this._target == undefined) {
  //     this.InitDrowDown();
  //   }

  // }
  // get dataSource() {
  //   return this._mydata
  // }
  @Input() dataSource: Array<any> = [];//传进来的数据

  @Input() paging:boolean = true; //是否有翻页
  @Input() multiple: boolean = false; //多选
  @Input() width: number = 200;     //宽度
  @Input() visCount: number = 5;     //每页的可视数据
  @Input() pageSize: number = 10;     //每页的总数据
  @Input() placeholder: string = '点击下拉选择'; //设置placeholder

  public eleId: string; //节点id
  public value: any; //选中的值
  public _target: any; //实例
  @Output() onChange = new EventEmitter();

  

  InitDrowDown() {
  
    this._target = new dropdownSelect("#" + this.eleId, {
      data: this.dataSource,
      multiple: this.multiple,
      width: this.width,
      visCount: this.visCount,
      pageSize: this.pageSize,
      triggerText:  this.placeholder,
      notFoundText: '无匹配记录',
      onOptionClick: (value) => {
        this.value = value;
        this.onChange.emit(value);
      }
    });


  }
  ngAfterViewInit() {
    this.InitDrowDown();
    if(this.paging===false){
      this.el.nativeElement.getElementsByClassName('select__page')[0].style.display = 'none';
    }
  }
  
  ngOnChanges(){
    if(this._target&&this._target.length!=0){
      this._target.setData(this.dataSource);
    }
  }

  ngOnDestroy() {
    this._target.destroy();
  }

  cleanValue() {
    this._target.cleanValue();
  }

}
