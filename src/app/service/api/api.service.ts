import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ReportedApi } from '../const/api_const';
import { config } from 'rxjs';
const ID = "{id}";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http: HttpClient) { }
  private ROOT = `${ReportedApi.protocol_https}://${ReportedApi.DOMAIN}`;
  //FILTER
  getPhongBan(onFinish){
    this._http.get(`${this.ROOT}${ReportedApi.API.GET_PHONG_BAN}`).subscribe(
      (data) => { onFinish(true, data)},
      (err) => {onFinish(false, err)}
    )
  }
  getCuaHang(onFinish){
    this._http.get(`${this.ROOT}${ReportedApi.API.GET_CUA_HANG}`).subscribe(
      (data) => { onFinish(true, data)},
      (err) => {onFinish(false, err)}
    )
  }
  getMaNv(onFinish){
    this._http.get(`${this.ROOT}${ReportedApi.API.GET_MANV}`).subscribe(
      (data) => { onFinish(true, data)},
      (err) => {onFinish(false, err)}
    )
  }
  getChiNhanh(onFinish){
    this._http.get(`${this.ROOT}${ReportedApi.API.GET_CHI_NHANH}`).subscribe(
      (data) => { onFinish(true, data)},
      (err) => {onFinish(false, err)}
    )
  }
  //HR
  // GET SUM WITH CATEGORIES (DASH 1,2)
  getSumWithCategoriesInPb(filter,onFinish){
    this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_WITH_CATEGORIES_IN_PB}`, filter).subscribe(
      (data) => { this.execIfSuccess(data, onFinish) },
      (err) => { this.execIfError(err, onFinish) }
    )
  }
  async getSumWithCategoriesInPb2(filter){
    return await this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_WITH_CATEGORIES_IN_PB}`, filter).toPromise()
  }
  getCountedAllHrInEachPB(filter,onFinish){
    this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_ALL_HR_IN_EACH_PB}`, filter).subscribe(
      (data) => { this.execIfSuccess(data, onFinish) },
      (err) => { this.execIfError(err, onFinish) }
    )
  }
  getSumCategoriesGroupedByMonth(filter,onFinish){
    this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_WITH_CATEGORIES_GROUPED_BY_MONTH}`, filter).subscribe(
      (data) => { this.execIfSuccess(data, onFinish) },
      (err) => { this.execIfError(err, onFinish) }
    )
  }
  async getSumCategoriesGroupedByMonth2(filter){
    return await this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_WITH_CATEGORIES_GROUPED_BY_MONTH}`, filter).toPromise()
  }
  getCountedHrGroupedByMonth(filter,onFinish){
    this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_HR_GROUPED_BY_MONTH}`, filter).subscribe(
      (data) => { this.execIfSuccess(data, onFinish) },
      (err) => { this.execIfError(err, onFinish) }
    )
  }
  async getCountedHrGroupedByMonth2(filter){
    return await this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_HR_GROUPED_BY_MONTH}`, filter).toPromise()
  }
  getCountedAllNewHrGroupedByMonth(filter,onFinish){
    this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_ALL_NEW_HR_GROUPED_BY_MONTH}`, filter).subscribe(
      (data) => { this.execIfSuccess(data, onFinish) },
      (err) => { this.execIfError(err, onFinish) }
    )
  }
  getCountedAllQuitedHrGroupedByMonth(filter,onFinish){
    this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_ALL_QUITED_HR_GROUPED_BY_MONTH}`, filter).subscribe(
      (data) => { this.execIfSuccess(data, onFinish) },
      (err) => { this.execIfError(err, onFinish) }
    )
  }

  // //GET SUM WITH CATEGORIES IN A MONTH
  // getSumWithCategoriesInAMonth(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_WITH_CATEGORIES_IN_A_MONTH}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  
  // }
  // //GET COUNTED HR IN MONTH
  // getCountedHrInMonth(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_HR_IN_MONTH}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
  // //GET COUNTED ALL NEW HR
  // getCountedAllNewHr(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_ALL_NEW_HR}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
  // //GET COUNTED ALL QUITED HR
  // getCountedAllQuitedHr(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_ALL_QUITED_HR}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }

  // //GET SUM WITH CATEGORIES IN PB
  // getSumWithCategoriesInPhongBan(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_WITH_CATEGORIES_IN_PB}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
  // //GET AVERAGE IN PB
  // getAverageInPhongBan(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_ALL_HR_IN_ALL_PB}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
  // //GET SUM WITH CATEGORIES GROUPED BY MONTH
  // getSumWithCategoriesGroupedByMonth(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_CATEGORIES_GROUP_BY_MONTH}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
  // //GET SUM CATEGORIES IN PB GROUPED BY MONTH
  // getSumCategoriesInPbGroupedByMonth(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_SUM_CATEGORIES_IN_PB_GROUP_BY_MONTH}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
  // //GET COUNTED MANV GROUPED BY MONTH
  // getCountedManvGroupedByMonth(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_MANV_GROUPED_BY_MONTH}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
  // //GET COUNTED ALL NEW HR GROUPED BY MONTH
  // getCountedAllNewHrGroupedByMonth(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_ALL_NEW_HR_GROUP_BY_MONTH}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
  // //GET COUNTED ALL QUITED HR GROUPED BY MONTH
  // getCountedAllQuitedHrGroupedByMonth(filter,onFinish){
  //   this._http.post(`${this.ROOT}${ReportedApi.API.GET_COUNTED_ALL_QUITED_HR_GROUP_BY_MONTH}`, filter).subscribe(
  //     (data) => { this.execIfSuccess(data, onFinish) },
  //     (err) => { this.execIfError(err, onFinish) }
  //   )
  // }
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
