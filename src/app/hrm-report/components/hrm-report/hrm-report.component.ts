import { Component, OnInit, OnDestroy} from '@angular/core';
import {BindingDataToRouterService} from './../../../service/binding_data_to_router/binding-data-to-router.service';
import {Subscription,Subject,Observable} from 'rxjs';
import {filter} from '../../../service/const/fiter_types_const';
import {multi} from './../../../service/const/dataFromApi'
import {ApiService} from './../../../service/api/api.service';
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
  public filter;
  public thang:number=1; 
  public nam:number=2020;
  public title:string="Tổng thu nhập"
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
  public getsumwithcategoriesinpbwithcuahang;
  public getaverage;
  //dash8
  public getsumwithcategorieseachmonth=multi;
  constructor(
    public bindingData:BindingDataToRouterService,
    public apiService:ApiService,
    public hrmReportService:HrmReportService
    ) {
      this.filter=filter
      //pass filter infor(x) to child
    this.subscription = bindingData.getData().subscribe(x => {
      if(x){
        console.log(x)
      this.nam=x.nam;
      this.thang=x.thang;
      this.title=x.hangmuc
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
        //chuyển hạng mục về đúng kiểu để gửi api
        for (let i = 0; i < this.filter.length; i++) {
            for (let j = 0; j< this.filter[i].view.length; j++) {
              if(hangmuc==this.filter[i].view[j]){
                  hangmuc=this.filter[i].value[j]
              }
            }
          }
        let manv=this.body.manv;
        //get sum with categories this year
        this.getsumwithcategoriesnow=0;
        this.getsumwithcategoriespast=0;
        this.getsumwithmonthnow=0;
        this.getsumwithmonthpast=0;
        this.getcountedhrminmonthnow=0;
        this.getcountedhrminmonthpast=0;
         //dash1,2,8
          this.apiService.getSumCategoriesGroupedByMonth({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,data)=>{
            if(status){
              for (let i = 0; i < data.length; i++) {
                //get sum with categories this year
                this.getsumwithcategoriesnow+=data[i].value
                  //get sum with categories add month this year
                if(data[i].name==thang){
                  this.getsumwithmonthnow=data[i].value
                }
              }
            }
            //dash 8
            for (let i = 0; i < data.length; i++) {
              this.getsumwithcategorieseachmonth[i].name=data[i].name;
              this.getsumwithcategorieseachmonth[i].series[0].name=this.nam.toString();
              this.getsumwithcategorieseachmonth[i].series[0].value=data[i].value
            }
            this.getsumwithcategorieseachmonth=[...this.getsumwithcategorieseachmonth]
          }) 
          this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang,hangmuc},(status,data)=>{
            if(status){
              for (let i = 0; i < data.length; i++) {
                if(data[i].name=thang){
                  this.getcountedhrminmonthnow=data[i].value
                }
              }
            }
          }) 
          //dash 4
          this.apiService.getCountedAllNewHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
            if(status){
              for (let i = 0; i < data.length; i++) {
                if(data[i].name=thang){
                  this.getcountedallnewhr=data[i].value
                }
              }
            }
          }) 
          //dash 4
          this.apiService.getCountedAllQuitedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
            if(status){
              for (let i = 0; i < data.length; i++) {
                if(data[i].name=thang){
                  this.getcountedallquitedhr=data[i].value
                }
              }
            }
          }) 
          //dash5
          this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,hangmuc},(status,data)=>{
            if(status){
              this.sum=0;
              data.forEach(e => {
                this.sum+=e.value;
              });
              this.getsumwithcategoriesinpb=data  
            }
          }) 
          //dash6
          this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,hangmuc},(status,data)=>{
            if(status){
              for (let i = 0; i <data.length; i++) {
                if(this.sum){
                  data[i].value=this.hrmReportService.handlePercent(this.sum,data[i].value);
                }
              }
              this.getpercentofeachpb=data
            }
          }) 
          //dash 7
          this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,hangmuc},(status,data)=>{
            if(status){
                this.getsumwithcategoriesinpbwithcuahang=data
            }
          }) 
          this.apiService.getCountedAllHrInEachPB({nam,thang,chinhanh,hangmuc},(status,data)=>{
            if(status){
              for (let i = 0; i < data.length; i++) {
                if(this.getsumwithcategoriesinpbwithcuahang){
                  if(data[i].value&&this.getsumwithcategoriesinpbwithcuahang[i].value){
                    data[i].value=this.getsumwithcategoriesinpbwithcuahang[i].value/data[i].value
                  }
                }
              }
              this.getaverage=data
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
             //dash 8
             console.log(data)
            for (let i = 0; i < data.length; i++) {
              this.getsumwithcategorieseachmonth[i].series[1].name=(this.nam-1).toString();
              this.getsumwithcategorieseachmonth[i].series[1].value=data[i].value;
            }
            this.getsumwithcategorieseachmonth=[...this.getsumwithcategorieseachmonth]
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
