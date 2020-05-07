import { Component, OnInit, OnDestroy} from '@angular/core';
import {BindingDataToRouterService} from './../../../service/binding_data_to_router/binding-data-to-router.service';
import {Subscription,Subject,Observable} from 'rxjs';
import {ApiService} from './../../../service/api/api.service';
import {single,single2,single3} from './../../../service/const/dataFromApi';
import {HrmReportService} from './../../service/hrm-report.service'
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
  public stackedAreaChart
  //dash2
  public getsumwithmonthnow:number=0;
  public getsumwithmonthpast:number=0;
  //dash3
  public getcountedhrminmonthnow:number=0;
  public getcountedhrminmonthpast:number=0;
  //dash4
  public getcountedallnewhr:number=0;
  public getcountedallquitedhr:number=0;
  //dash5
  public getsumwithcategoriesinpb;
  //dash6
  public getpercentofeachpb;
  public sum=0
  //dash7
  public getaverage=single2
  constructor(
    public bindingData:BindingDataToRouterService,
    public apiService:ApiService,
    public hrmReportService:HrmReportService
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
        this.body=this.bindingData.bridge;
        let nam=this.body.nam;
        let thang=this.body.thang;
        let chinhanh=this.body.chinhanh;
        let phongban=this.body.phongban;
        let cuahang=this.body.cuahang;
        let hangmuc=this.body.hangmuc;
        let manv=this.body.manv;
        //get sum with categories this year
        this.getsumwithcategoriesnow=0;
        this.getsumwithcategoriespast=0;
        this.getsumwithmonthnow=0;
        this.getsumwithmonthpast=0;
        this.getcountedhrminmonthnow=0;
        this.getcountedhrminmonthpast=0;
          this.apiService.getSumCategoriesGroupedByMonth({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,data)=>{
            if(status){
              this.stackedAreaChart=data
              this.stackedAreaChart=[...this.stackedAreaChart]
              for (let i = 0; i < data.length; i++) {
                //get sum with categories this year
                this.getsumwithcategoriesnow+=data[i].value
                  //get sum with categories add month this year
                if(data[i].name==thang){
                  this.getsumwithmonthnow=data[i].value
                }
              }
            }
          }) 
          this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
            if(status){
              for (let i = 0; i < data.length; i++) {
                if(data[i].name=thang){
                  this.getcountedhrminmonthnow=data[i].value
                }
              }
            }
          }) 
          this.apiService.getCountedAllNewHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
            if(status){
              for (let i = 0; i < data.length; i++) {
                if(data[i].name=thang){
                  this.getcountedallnewhr=data[i].value
                }
              }
            }
          }) 
          this.apiService.getCountedAllQuitedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
            if(status){
              for (let i = 0; i < data.length; i++) {
                if(data[i].name=thang){
                  this.getcountedallquitedhr=data[i].value
                }
              }
            }
          }) 
          this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,cuahang,hangmuc},(status,data)=>{
            if(status){
              this.sum=0;
              data.forEach(e => {
                this.sum+=e.value;
              });
              this.getsumwithcategoriesinpb=data  
            
            }
          }) 
          
          this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,cuahang,hangmuc},(status,data)=>{
            if(status){
              for (let i = 0; i <data.length; i++) {
                data[i].value=this.hrmReportService.handlePercent(this.sum,data[i].value);
              }
              this.getpercentofeachpb=data
            }
          }) 

        nam--


        //and last year
        this.apiService.getSumCategoriesGroupedByMonth({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,data)=>{
          if(status){
            for (let i = 0; i < data.length; i++) {
              this.getsumwithcategoriespast+=data[i].value
              if(data[i].name==thang){
                this.getsumwithmonthpast=data[i].value
              }
            }
          }
        }) 
        this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
          if(status){
            for (let i = 0; i < data.length; i++) {
              if(data[i].name=thang){
                this.getcountedhrminmonthpast=data[i].value
              }
            }
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
