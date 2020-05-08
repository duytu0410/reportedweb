import { Injectable } from '@angular/core';
import {ApiService} from './../../service/api/api.service';
@Injectable({
  providedIn: 'root'
})
export class HrmReportService {
  public apiService:ApiService;

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
