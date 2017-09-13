import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private thead = [{
    name:'id',
    text:'序号'
  },
  {
    name:'trackingId',
    text:'跟踪号'
  },
  {
    name:'orderId',
    text:'订单号'
  },
  {
    name:'person',
    text:'渠道商'
  },{
    name:'controy',
    text:'目的国家'
  },{
    name:'status',
    text:'包裹状态'
  },{
    name:'updateTime',
    text:'更新时间'
  },{
    name:'stayTime',
    text:'更新时间'
  },{
    name:'allTime',
    text:'运输时间'
  }];
  dataSource = [];
  modalState = {
    show:true
  }
}
