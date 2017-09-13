import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType} from '@angular/http';
// import {  HttpParams } from '@angular/common/http';
import { api } from '../api/Api';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RandomUserService {

  constructor(private http: Http) {

  }

  // getList(searchObj) {
  //   let obj = {
  //     params:
  //     {
  //       results: searchObj.results,
  //       page: searchObj.page
  //     }
  //   };
  //   return this.http.get(api.getList,obj).toPromise().then((data) => {
  //     return data.json();
  //   })
  // }
  getUsers(pageIndex = 1, pageSize = 10, sortField, sortOrder, genders) {
    // let params = new HttpParams()
    //   .append('page', `${pageIndex}`)
    //   .append('results', `${pageSize}`)
    //   .append('sortField', sortField)
    //   .append('sortOrder', sortOrder);
    // genders.forEach(gender => {
    //   params = params.append('gender', gender);
    // });
    let params = {
      page: pageIndex,
      results:pageSize,
      sortField:sortField,
      sortOrder:sortOrder,
      genders:genders
    }
    return this.http.get(api.getList, {
      params: params
    }).toPromise().then((data)=>{
      return data.json();
    })

  }
}