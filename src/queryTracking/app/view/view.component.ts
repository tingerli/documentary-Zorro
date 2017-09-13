import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public chartSetting = {
    title:"跟踪号包裹状态分布概览",
    // hoverText:"单号数量",
    y:{
      title:"数量"
    },
    x:{
      categories:["查询不到","运输途中",'成功签收','到达领取','可能异常','运输过久','投递失败']
    },
    datas:[
      {
        name:"跟踪单号包裹",
        data:[
          20,20,99070,10,620,180,80
        ]
      }
    ]

  }
}
