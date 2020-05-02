import { Component,OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {filter} from '../../service/const/fiter_types_const';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {BindingDataToRouterService} from './../../service/binding_data_to_router/binding-data-to-router.service';
import {ApiService} from './../../service/api/api.service';
import {HrmReportService} from './../../hrm-report/service/hrm-report.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit,OnDestroy {
  filterForm;
  public filter;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private bindingDataToRouterService:BindingDataToRouterService,
    private apiService:ApiService,
    private hrmReportService:HrmReportService
    ) {
      this.filterForm = this.formBuilder.group({
        "nam": ['', Validators.required],
        "thang": ['', Validators.required],
        "chinhanh":['', Validators.required],
        "phongban":['Ban Giám Đốc', Validators.required],
        "cuahang":['', Validators.required],
        "manv":['', Validators.required],
        "hangmuc":['Tổng thu nhập', Validators.required],
      });
    this.filter=filter;
  }
 
onSubmit(data){
  if(data){
    //chuyển dữ liệu từ có dấu sang hợp với database
    for (let i = 0; i < this.filter.length; i++) {
      for (let j = 0; j< this.filter[i].view.length; j++) {
        if(data.chinhanh==this.filter[i].view[j]){
          data.chinhanh=this.filter[i].value[j]
        }
        if(data.phongban==this.filter[i].view[j]){
          data.phongban=this.filter[i].value[j]
        }
        if(data.cuahang==this.filter[i].view[j]){
          data.cuahang=this.filter[i].value[j]
        }
        if(data.hangmuc==this.filter[i].view[j]){
          data.hangmuc=this.filter[i].value[j]
        }
      }
    }
    console.log(data)
    this.bindingDataToRouterService.sendData(data);
    //gọi api
    this.apiService.getSumWithCategories(data,(status,dataFromApi)=>{
      if(status){
       this.hrmReportService.sendGetSumWithCategories(dataFromApi)
      }
    })
    
  }
  // this.filterForm.reset();
}
ngOnInit(): void {

}
ngOnDestroy(){
  this.bindingDataToRouterService.clearData()
}
}
