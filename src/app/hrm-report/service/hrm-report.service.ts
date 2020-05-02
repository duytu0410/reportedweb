import { Injectable } from '@angular/core';
import {ApiService} from './../../service/api/api.service';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HrmReportService {
  public apiService:ApiService;
  private getsumwithcategories=new Subject<any>();
  constructor() { }
  //send data for get
  sendGetSumWithCategories(message:string){
    this.getsumwithcategories.next(message)
  }

  clearGetSumWithCategories() {
    this.getsumwithcategories.next();
  }
  getGetSumWithCategories(): Observable<any> {
    return this.getsumwithcategories.asObservable();
}
}
