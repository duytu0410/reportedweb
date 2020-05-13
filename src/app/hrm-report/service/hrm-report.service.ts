import { Injectable } from '@angular/core';
import {ApiService} from './../../service/api/api.service';
@Injectable({
  providedIn: 'root'
})
export class HrmReportService {
  public apiService:ApiService;
  //biến cho filter html
  public years;
  public months;
  public filter;
  //biến cho các title
  public thang:number=1; 
  public nam:number=2020;
  public body;
 //biến call api
  public body1;
  public body2;
  public body3;
  constructor() { };
  handlePercent(value1:number,value2:number):number{
    return  Math.round(( (value2/value1))  * 100 + Number.EPSILON )
  }

  handleTypes(str:string) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D')
              .replace(/\s/g, "");
  }

}
