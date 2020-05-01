import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {filter} from './../../service/filter_types/fiter_types_const';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  filterForm;
  public filter;
  constructor(private router: Router,
    private formBuilder: FormBuilder,) {
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
  console.log(data)
  // this.filterForm.reset();
}
ngOnInit(): void {

}

}
