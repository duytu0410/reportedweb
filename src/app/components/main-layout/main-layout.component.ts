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
   
  }
 

ngOnInit(): void {

}
ngOnDestroy(){
  this.bindingDataToRouterService.clearData()
}
}
