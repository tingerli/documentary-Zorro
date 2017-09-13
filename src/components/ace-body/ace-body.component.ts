import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';



@Component({
  selector: 'ace-body',
  templateUrl: './ace-body.component.html',
  styleUrls: ['./ace-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ // 动画的内容
    // trigger('visibilityChanged', [
    //   // state 控制不同的状态下对应的不同的样式
    //   state('shown', style({})),
    //   state('hidden', style({})),
    //   // transition 控制状态到状态以什么样的方式来进行转换
    //   transition('shown => hidden', animate('600ms')),
    //   transition('hidden => shown', animate('300ms')),
    // ]),
  ]
})
export class AceBodyComponent implements OnInit {
  @Input() title: string;
  
  status:boolean;
  private contentEl:any;
  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.contentEl = this.el.nativeElement.querySelector('.ace-body-content');
    this.status = true;
  }

  //收起
  clickIcon(e: any) {
    e.preventDefault();

    
    if(this.status){
      $(this.contentEl).slideUp();
    }else{
      $(this.contentEl).slideDown();
    }
    this.status = !this.status;
  }
}
