import { Injectable } from '@angular/core';
import {ApiService} from './../../service/api/api.service';
@Injectable({
  providedIn: 'root'
})
export class HrmReportService {
  public apiService:ApiService;

  constructor() { };
}
