import { Component, OnInit, OnDestroy} from '@angular/core';
import {BindingDataToRouterService} from './../../../service/binding_data_to_router/binding-data-to-router.service';
import {Subscription,Subject,Observable} from 'rxjs';
import {ApiService} from './../../../service/api/api.service';
import {Filter} from './../../../models/filter'
@Component({
  selector: 'app-hrm-report',
  templateUrl: './hrm-report.component.html',
  styleUrls: ['./hrm-report.component.css']
})
export class HrmReportComponent implements OnInit,OnDestroy {
  public subscription:Subscription;
  private messageSubscription: Subscription;
  public body;
  public thang:number=1; 
  public nam:number=2020;
  //dash1
  public getsumwithcategoriesnow:number=0;
  public getsumwithcategoriespast:number=0;
  //dash2
  public getsumwithmonthnow:number=0;
  public getsumwithmonthpast:number=0;
  constructor(
    public bindingData:BindingDataToRouterService,
    public apiService:ApiService
    ) {
      //pass filter infor(x) to child
    this.subscription = bindingData.getData().subscribe(x => {
      if(x){
      this.nam=x.nam;
      this.thang=x.thang;
      }
      
    });
    
  }
  ngOnInit(): void {
    // when filter button is clicked:
    this.messageSubscription = this.bindingData.message.subscribe(m => {
      if(m){
        this.body=this.bindingData.bridge
        console.log(this.body)
        let nam=this.body.nam;
        let thang=this.body.thang;
        let chinhanh=this.body.chinhanh;
        let phongban=this.body.phongban;
        let cuahang=this.body.cuahang;
        let hangmuc=this.body.hangmuc;
        let manv=this.body.manv;
        //get sum with categories this year
      //   console.log({nam,chinhanh,phongban,cuahang,manv,hangmuc})
        this.apiService.getSumWithCategories({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,dataFromApi)=>{
          if(status){
           this.getsumwithcategoriesnow=dataFromApi
          }
        })
        //get sum with categories add month this year
        this.apiService.getSumWithCategories({nam,thang,chinhanh,phongban,cuahang,manv,hangmuc},(status,dataFromApi)=>{
          if(status){
           this.getsumwithmonthnow=dataFromApi
          }
        })
        nam--
      //   //and last year
        this.apiService.getSumWithCategories({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,dataFromApi)=>{
          if(status){
           this.getsumwithcategoriespast=dataFromApi
          }
        })
        //and last year add month
        this.apiService.getSumWithCategories({nam,thang,chinhanh,phongban,cuahang,manv,hangmuc},(status,dataFromApi)=>{
          if(status){
           this.getsumwithmonthpast=dataFromApi
          }
        })
      }
  });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }
}
