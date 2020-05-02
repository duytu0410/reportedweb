import { Component, OnInit, OnDestroy} from '@angular/core';
import {BindingDataToRouterService} from './../../../service/binding_data_to_router/binding-data-to-router.service';
import {Subscription} from 'rxjs';
import {HrmReportService} from './../../service/hrm-report.service'
@Component({
  selector: 'app-hrm-report',
  templateUrl: './hrm-report.component.html',
  styleUrls: ['./hrm-report.component.css']
})
export class HrmReportComponent implements OnInit,OnDestroy {
  public thang:number=1; 
  public nam:number=2020;
  public getsumwithcategories
  public subscription:Subscription
  constructor(public ds:BindingDataToRouterService,
    public hrmReportService:HrmReportService
    ) {
    this.subscription = ds.getData().subscribe(x => { 
           this.nam=x.nam;
           this.thang=x.thang
    });
    this.subscription=hrmReportService.getGetSumWithCategories().subscribe(x=>{
      this.getsumwithcategories=x
    })
  }
  ngOnInit(): void {
  }
 
    
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
