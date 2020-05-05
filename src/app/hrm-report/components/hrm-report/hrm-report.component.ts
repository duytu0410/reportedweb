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
  public getsumwithcategoriesinpb=single;
  //dash6
  public getpercentofeachpb=single3
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
          this.apiService.getSumWithCategories({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,dataFromApi)=>{
            if(status){
              this.getsumwithcategoriesnow+=dataFromApi
            }
          }) 
           //get sum with categories add month this year
        
          this.apiService.getSumWithCategoriesInAMonth({nam,thang,chinhanh,phongban,cuahang,manv,hangmuc},(status,dataFromApi)=>{
            if(status){
            this.getsumwithmonthnow+=dataFromApi;
            }
          })

       
        //get counted hrm in month this year
        this.apiService.getCountedHrInMonth({nam,thang,chinhanh,phongban,cuahang},(status,data)=>{
          if(status){
            this.getcountedhrminmonthnow=data
          }
        })
        //get all new hr this year
        this.apiService.getCountedAllNewHr({nam,thang,chinhanh,phongban,cuahang},(status,data)=>{
          if(status){
            this.getcountedallnewhr=data
          }
        })
        //get all quited hr this year
        this.apiService.getCountedAllQuitedHr({nam,thang,chinhanh,phongban,cuahang},(status,data)=>{
          if(status){
            this.getcountedallquitedhr=data
          }
        })
        //get sum with categories in phong ban this year and 
        this.apiService.getSumWithCategoriesInPhongBan({nam,thang,chinhanh,hangmuc},(status,data)=>{
          if(status){
            
            for (let index = 0; index < data.length; index++) {
              this.getsumwithcategoriesinpb[index].name=data[index].title;
              this.getsumwithcategoriesinpb[index].value=data[index].tong;
            }
            this.getsumwithcategoriesinpb=[...this.getsumwithcategoriesinpb]
          }
        })
        //get percent of each pb
        this.apiService.getSumWithCategoriesInPhongBan({nam,thang,chinhanh,hangmuc},(status,data)=>{
          if(status){
            let sum=0;
            data.forEach(element => {
              sum+=element.tong
            });
            for (let i = 0; i < data.length; i++) {
              this.getpercentofeachpb[i].name=data[i].title;
              this.getpercentofeachpb[i].value=this.hrmReportService.handlePercent(sum,data[i].tong)
            }
              this.getpercentofeachpb=[...this.getpercentofeachpb]
          }
        })
        //get average for each phong ban(dash7)
          this.apiService.getAverageInPhongBan({nam,thang,cuahang,chinhanh,hangmuc},(status,data)=>{
            if(status){
              for (let index = 0; index < data.length; index++) {
                for (let j = 0; j < this.getsumwithcategoriesinpb.length; j++) {
                  if(data[index].title==this.getsumwithcategoriesinpb[j].name){
                    this.getaverage[index].name=data[index].title;
                    this.getaverage[index].value=this.getsumwithcategoriesinpb[j].value/data[index].tong;
                  }
                }
              }
              this.getaverage=[...this.getaverage]
            }
          })
        nam--
        //and last year
        this.apiService.getSumWithCategories({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,dataFromApi)=>{
          if(status){
            this.getsumwithcategoriespast+=dataFromApi
          }
        }) 
          //and last year add month
          this.apiService.getSumWithCategoriesInAMonth({nam,thang,chinhanh,phongban,cuahang,manv,hangmuc},(status,dataFromApi)=>{
            if(status){
             this.getsumwithmonthpast+=dataFromApi
            }
          })
           //get counted hrm in month last year
           this.apiService.getCountedHrInMonth({nam,thang,chinhanh,phongban,cuahang},(status,data)=>{
            if(status){
              this.getcountedhrminmonthpast=data
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
