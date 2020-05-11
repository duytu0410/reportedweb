import { Component,OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {filter} from '../../service/const/fiter_types_const';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {BindingDataToRouterService} from './../../service/binding_data_to_router/binding-data-to-router.service';
import {ApiService} from './../../service/api/api.service'
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit,OnDestroy {
  filterForm;
  public filter;
  public getsumwithcategoriesnow;
  public getsumwithcategoriespast;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private bindingDataToRouterService:BindingDataToRouterService,
    public apiService:ApiService
    ) {
      this.filterForm = this.formBuilder.group({
        "nam": [2020, Validators.required],
        "thang": [2, Validators.required],
        "chinhanh":['Hội sở', Validators.required],
        "phongban":['Ban Giám Đốc', Validators.required],
        "cuahang":['Kim Mã', Validators.required],
        "manv":['PSL002', Validators.required],
        "hangmuc":['Tổng thu nhập', Validators.required],
      });
    this.filter=filter;
  }
 
onSubmit(data){
  
  if(data){
    //chuyển dữ liệu từ có dấu sang hợp với database
    // for (let i = 0; i < this.filter.length; i++) {
    //   for (let j = 0; j< this.filter[i].view.length; j++) {
    //     if(data.hangmuc==this.filter[i].view[j]){
    //       data.hangmuc=this.filter[i].value[j]
    //     }
    //   }
    // }
    this.bindingDataToRouterService.bridge=data
    this.bindingDataToRouterService.buttonClicked(true);
    this.bindingDataToRouterService.sendData(data);
  }
  // this.filterForm.reset();
}
ngOnInit(): void {

}
ngOnDestroy(){
  this.bindingDataToRouterService.clearData()
}
}
