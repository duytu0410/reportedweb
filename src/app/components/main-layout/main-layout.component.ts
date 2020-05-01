import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {filter} from './../../service/filter_types/fiter_types_const';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  filterForm:FormGroup
  public years;
  public months;
  public branches;
  public offices;
  public shops;
  public hrmIds;
  public types;
  constructor(private router: Router,
     private formBuilder: FormBuilder,) {
    this.years=filter.years;
    this.months=filter.months;
    this.branches=filter.branches;
    this.offices=filter.offices;
    this.shops=filter.shops;
    this.hrmIds=filter.hrmIds;
    this.types=filter.types;
  }

ngOnInit(): void {
//  this.filterForm=this.formBuilder.group
}

}
