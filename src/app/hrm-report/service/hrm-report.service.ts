import { Injectable } from '@angular/core';
import {ApiService} from './../../service/api/api.service';
import {Filter} from './../../models/filter'
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
  public body4;
  public body5;
  public body6;
  public bodies=[this.body1,this.body2,this.body3,this.body4,this.body5,this.body6]

  //dash1
  public getsumwithcategoriesnow:number=0;
  public getsumwithcategoriespast:number=0;
  //dash2
  public getsumwithmonthnow:number=0;
  public getsumwithmonthpast:number=0;
  //dash3
  public getcountedhrminmonthnow:number=0;
  public getcountedhrminmonthpast:number=0;
  //dash4
  public getcountedallnewhr:number=0;
  public getcountedallquitedhr:number=0;
  //dash5
  public getsumwithcategoriesinpb; 
  //dash 6
  public sum:number=0
  public getpercentofeachpb;
  //dash7
  public getsumwithcategoriesinpbwithcuahang;
  public getaverage;
  
  constructor() {
   };
  handlePercent(value1:number,value2:number):number{
    return  Math.round(( (value2/value1))  * 100 )
  }

  handleTypes(str:string) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D')
              .replace(/\s/g, "");
  }
}
