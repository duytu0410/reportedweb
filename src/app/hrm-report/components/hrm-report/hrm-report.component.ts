import { Component, OnInit, OnDestroy} from '@angular/core';
import {BindingDataToRouterService} from './../../../service/binding_data_to_router/binding-data-to-router.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-hrm-report',
  templateUrl: './hrm-report.component.html',
  styleUrls: ['./hrm-report.component.css']
})
export class HrmReportComponent implements OnInit,OnDestroy {
  public month:number=1; 
  public year:number=2020;
  public subscription:Subscription
  constructor(ds:BindingDataToRouterService) {
    this.subscription = ds.getData().subscribe(x => { 
           this.year=x.year;
           this.month=x.month;
    });
  }
  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
