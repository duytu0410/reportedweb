import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {filter} from './../../service/filter_types/fiter_types_const'
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public years;
  public months;
  public branches;
  public offices;
  public shops;
  public hrmIds;
  public types;
  constructor(private router: Router) {
    this.years=filter.years;
    this.months=filter.months;
    this.branches=filter.branches;
    this.offices=filter.offices;
    this.shops=filter.shops;
    this.hrmIds=filter.hrmIds;
    this.types=filter.types;
  }

ngOnInit(): void {
 
}

}
