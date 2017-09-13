import { Component, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { RandomUserService } from "./service/random-user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  // ======tab切换==============
  nzTabPosition = 'top';
  state = '';

  // =====日期===================
  _startDate = null;
  _endDate = null;
  _date = null;

  // =======table====================
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;
  _sortValue = null;
  _filterGender = [
    { name: 'male', value: false },
    { name: 'female', value: false }
  ];
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _indeterminate = false;

  // ======下拉框========================
  width = "159px";
  // Ajax读取采购中心列表数据
  shopCenter = [
    {
      label: "备货中心"
    },
    {
      label: "德国备货中心"
    },
    {
      label: "东莞备货中心"
    },
    {
      label: "备货中心"
    },
  ];
  transportation = [
    {
      label: 'sample（1）'
    },
    {
      label: '紧急（2）'
    },
    {
      label: '普通（3）'
    },
    {
      label: '备货（4）'
    },
    {
      label: '海外新品调拨（5）'
    },
    {
      label: 'FBA（6）'
    },
    {
      label: '批发（7）'
    },
    {
      label: '广告推广（8）'
    },
    {
      label: '海运备货（9）'
    },
    {
      label: 'FBA备货（12）'
    }
  ];
  sheetState = [
    {
      label: '转运中'
    },
    {
      label: '已确认'
    },
    {
      label: '已签收'
    },
    {
      label: '已入库'
    },
    {
      label: '已调拨'
    }
  ];
  // Ajax读取跟单主管列表数据
  executives = [
    {
      label: '张三'
    },
    {
      label: '李四'
    },
    {
      label: '张三'
    },
    {
      label: '李四'
    },
    {
      label: '张三'
    },
    {
      label: '李四'
    }
  ];
  // Ajax读取跟单员列表数据
  merchandiser = [
    {
      label: '张三'
    },
    {
      label: '李四'
    },
    {
      label: '张三'
    },
    {
      label: '李四'
    },
    {
      label: '张三'
    },
    {
      label: '李四'
    }
  ];
  // Ajax读取SKU基础状态列表数据
  skuState = [
    {
      label: '张三'
    },
    {
      label: '李四'
    },
    {
      label: '张三'
    },
    {
      label: '李四'
    },
    {
      label: '张三'
    },
    {
      label: '李四'
    }
  ];
  printState = [
    {
      label: '已打印'
    },
    {
      label: '未打印'
    }
  ];
  drawback = [
    {
      label: '是'
    },
    {
      label: '否'
    }
  ];
  // Ajax读取供应商列表数据
  supplier = [
    {
      label: 'aaa'
    },
    {
      label: 'bbb'
    }
  ]
  // Ajax读取处理中心列表数据
  finalCenter = [
    {
      label: '张三'
    },
    {
      label: '李四'
    },
    {
      label: '张三'
    },
    {
      label: '李四'
    },
    {
      label: '张三'
    }
  ]



  // ========方法===================

  // ========table=================
  sort(value) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }

  constructor(private _randomUser: RandomUserService) {
  }

  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender).then((data: any) => {
      this._loading = false;
      this._total = 200;
      console.log(data)
      this._dataSet = data.results;
    })
  };

  _displayDataChange($event) {
    this._displayData = $event;
  };

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  };

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  };

  _operateData() {
    this._operating = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  };


  // ======日期=======================================
  newArray = (len) => {
    const result = [];
    for (let i = 0; i < len; i++) {
      result.push(i);
    }
    return result;
  };
  _startValueChange = () => {
    if (this._startDate > this._endDate) {
      this._endDate = null;
    }
  };
  _endValueChange = () => {
    if (this._startDate > this._endDate) {
      this._startDate = null;
    }
  };
  _disabledStartDate = (startValue) => {
    if (!startValue || !this._endDate) {
      return false;
    }
    return startValue.getTime() >= this._endDate.getTime();
  };
  _disabledEndDate = (endValue) => {
    if (!endValue || !this._startDate) {
      return false;
    }
    return endValue.getTime() <= this._startDate.getTime();
  };
  get _isSameDay() {
    return this._startDate && this._endDate && moment(this._startDate).isSame(this._endDate, 'day')
  }
  get _endTime() {
    return {
      nzHideDisabledOptions: true,
      nzDisabledHours: () => {
        return this._isSameDay ? this.newArray(this._startDate.getHours()) : [];
      },
      nzDisabledMinutes: (h) => {
        if (this._isSameDay && h === this._startDate.getHours()) {
          return this.newArray(this._startDate.getMinutes());
        }
        return [];
      },
      nzDisabledSeconds: (h, m) => {
        if (this._isSameDay && h === this._startDate.getHours() && m === this._startDate.getMinutes()) {
          return this.newArray(this._startDate.getSeconds());
        }
        return [];
      }
    }
  }




  ngOnInit() {
    this.refreshData();
    // for (let i = 0; i < 46; i++) {
    //   this._dataSet.push({
    //     key: i,
    //     name: `Edward King ${i}`,
    //     age: 32,
    //     address: `London, Park Lane no. ${i}`,
    //   });
    // }


  }
}
