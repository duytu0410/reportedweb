import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ReportedApi } from '../const/api_const';
import { config } from 'rxjs';
const ID = "{id}";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http: HttpClient) { }
  private ROOT = `${ReportedApi.protocol_https}://${ReportedApi.DOMAIN}`;
  //HR
  // GET SUM WITH CATEGORIES (DASH 1,2)
  getSumWithCategories(filter,onFinish){
    this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_WITH_CATEGORIES}`, filter).subscribe(
      (data) => { this.execIfSuccess(data, onFinish) },
      (err) => { this.execIfError(err, onFinish) }
    )
  
  }
  //GET COUNTED HR IN MONTH
  getCountedHrInMonth(filter,onFinish){
    this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_HR_IN_MONTH}`, filter).subscribe(
      (data) => { this.execIfSuccess(data, onFinish) },
      (err) => { this.execIfError(err, onFinish) }
    )
  }
    // =============================
  // Call back if success
  private execIfSuccess(data, onFinish) {
    onFinish(true, data);
  }

  // Call back if Error
  private execIfError(err, onFinish) {
    console.log(err);
    onFinish(false, err);
  }

}
