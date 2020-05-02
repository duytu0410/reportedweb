import { Component,OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {filter} from './../../service/filter_types/fiter_types_const';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {BindingDataToRouterService} from './../../service/binding_data_to_router/binding-data-to-router.service'
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
    private ds:BindingDataToRouterService) {
      this.filterForm = this.formBuilder.group({
        year: ['', Validators.required],
        month: ['', Validators.required],
        branch:['', Validators.required],
        office:['Ban Giám Đốc', Validators.required],
        shop:['', Validators.required],
        hrmId:['', Validators.required],
        type:['Tổng thu nhập', Validators.required],
      });
    this.filter=filter;
  }
  
 
onSubmit(data){
  if(data){
    // sessionStorage.setItem('filterInfo', JSON.stringify(data));
    console.log(data)
    this.ds.sendData(data);
  }
  // this.filterForm.reset();
}
ngOnInit(): void {

}
ngOnDestroy(){
  this.ds.clearData()
}
}
