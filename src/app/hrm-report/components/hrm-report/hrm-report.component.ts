import { Component, OnInit, OnDestroy} from '@angular/core';
import {BindingDataToRouterService} from './../../../service/binding_data_to_router/binding-data-to-router.service';
import {Subscription,Subject,Observable} from 'rxjs';
import {filter} from '../../../service/const/fiter_types_const';
import {single,multi2,lineChart,barChart,lineChartSeries,bubbleData} from './../../../service/const/dataFromApi'
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
  public getsumwithcategorieseachmonth=multi2;
  //dash 9
  public getsumwithcategorieseachdifferent=lineChart;
  public getsumwithcategorieseachnow;
  public getsumwithcategorieseachpast=single;
  //dash 10
  public getpercentofeachmonth;
  //dash 11
  public getaverageeachmonthnow:any[]=barChart;
  public getaverageeachmonthpast:any[]=lineChartSeries;
  //dash 12
  public getdifferenteachmonth=lineChart
  //dash 13
  public getdifferentpercenteachmonth=lineChart;
  //dash 14
  public getcountedhreachmonth=multi2
  //dash 15
  public getallnewhreachmonthnow=lineChartSeries;
  public getallnewhreachmonthpast=barChart;
  //dash 16
  public getallquitedhreachmonthnow=lineChartSeries;
  public getallquitedhreachmonthpast=barChart;
  constructor(
    public bindingData:BindingDataToRouterService,
    public apiService:ApiService,
    public hrmReportService:HrmReportService
    ) {
      this.filter=filter
      //pass filter infor(x) to child
    this.subscription = bindingData.getData().subscribe(x => {
      if(x){
      this.nam=x.nam;
      this.thang=x.thang;
      this.title=x.hangmuc;
      this.getsumwithcategorieseachdifferent[0].name=this.title+" năm "+this.nam+" và "+(this.nam-1)
      }
    });
    
  }
  ngOnInit(): void {
   
    // when filter button is clicked:
    this.messageSubscription = this.bindingData.message.subscribe(m => {
      if(m){
        this.body=this.bindingData.bridge;
        console.log(this.body)
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
              console.log(data)
              //dash9,dash10
              this.getsumwithcategorieseachnow=data
              //hết dash9
              //dash1
              for (let i = 0; i < data.length; i++) {
                //get sum with categories this year
                this.getsumwithcategoriesnow+=data[i].value
              //hết dash1
              //dash2  
                  //get sum with categories add month this year
                if(data[i].name==thang){
                  this.getsumwithmonthnow=data[i].value
                }
              }
              //hết dash 2
                //dash11
                nam=JSON.parse(JSON.stringify(this.body.nam))
                this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang,hangmuc},(status2,data2)=>{
                  if(status2){
                    let data3=JSON.parse(JSON.stringify(data2))
                    for (let j = 0; j < data3.length; j++) {
                      data3[j].value=this.getsumwithcategorieseachnow[j].value/data3[j].value
                    }
                    this.getaverageeachmonthnow=data3
                    this.getaverageeachmonthnow=[...this.getaverageeachmonthnow]
                //heest dash11
                     //dash 12
                     let data12=JSON.parse(JSON.stringify(data3))
                     let data12a=JSON.parse(JSON.stringify(data3))
                     if(data3.length=data12.length=data12a.length){
                      if(this.getaverageeachmonthpast.length>0){
                        data12[0].value=data12[0].value-this.getaverageeachmonthpast[this.getaverageeachmonthpast.length-1].value
                      }
                      for (let j = 1; j < data3.length; j++) {
                       data12[j].value=data12a[j].value-data12a[j-1].value;
                       this.getdifferenteachmonth[0].series[j].value=data12[j].value;
                       this.getdifferenteachmonth[0].series[j].name=data12[j].name;

                      }
                      this.getdifferenteachmonth[0].name="Tăng trưởng so với tháng trước năm "+this.nam;
                      this.getdifferenteachmonth=[...this.getdifferenteachmonth]
                   }
                   //hết dash 12
                   //dash 13
                   let data13=JSON.parse(JSON.stringify(data3))
                   let data13a=JSON.parse(JSON.stringify(this.getdifferenteachmonth))
                   if(data13.lenght=data13a[0].series.length=data3.length){
                    if(this.getaverageeachmonthpast.length>0&&this.getaverageeachmonthpast[0].value!=0){
                      data13a[0].series[0].value=data13a[0].series[0].value/this.getaverageeachmonthpast[this.getaverageeachmonthpast.length-1].value
                    }
                    else{
                      data13a[0].series[0].value=100;
                      for (let i = 1; i < data13a.length; i++) {
                        data13a[0].series[i].value=data13a[0].series[i].value/data13[i-1].value;
                      }
                      this.getdifferentpercenteachmonth=data13a;
                      this.getdifferentpercenteachmonth=[...this.getdifferentpercenteachmonth]
                    }
                   }
                  }
                })
                 //dash 8
                  for (let i = 0; i < data.length; i++) {
                    this.getsumwithcategorieseachmonth[i].name=data[i].name;
                    this.getsumwithcategorieseachmonth[i].series[0].name=this.nam.toString();
                    this.getsumwithcategorieseachmonth[i].series[0].value=data[i].value
                  }

                  this.getsumwithcategorieseachmonth=[...this.getsumwithcategorieseachmonth]
                //hết dash 8
            }
          }) 
          
          //dash3
          this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang,hangmuc},(status,data)=>{
            if(status){
              console.log(data)
              let a=JSON.parse(JSON.stringify(this.getcountedhreachmonth))
              for (let i = 0; i < data.length; i++) {
                //dash 14
                a[i].series[0].name=nam+1
                a[i].series[0].value=data[i].value
                a[i].name=data[i].name
                if(data[i].name=thang){
                  this.getcountedhrminmonthnow=data[i].value
                } 
              }
              this.getcountedhreachmonth=[...a]
               //hết dash 14
            }
          }) 
          //hết dash 3
          //dash 4
          console.log(nam)
          this.apiService.getCountedAllNewHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
            if(status){
              let a=JSON.parse(JSON.stringify(this.getallnewhreachmonthnow))
              a[0].name="Số lượng nhân sự tăng";
              console.log(data)
              for (let i = 0; i < data.length; i++) {
                //dash 15
                a[0].series[i].value=data[i].value;
                a[0].series[i].name=data[i].name;
                if(data[i].name=thang){
                  this.getcountedallnewhr=data[i].value
                }
              }
              this.getallnewhreachmonthnow=[...a]
            }
          }) 
          //dash 4
          this.apiService.getCountedAllQuitedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
            if(status){
              let a=JSON.parse(JSON.stringify(this.getallquitedhreachmonthnow))
              a[0].name="Số lượng nhân sự giảm"
              for (let i = 0; i < data.length; i++) {
                //dash 16
                a[0].series[i].value=data[i].value;
                a[0].series[i].name=data[i].name;
                if(data[i].name=thang){
                  this.getcountedallquitedhr=data[i].value
                }
              }
              this.getallquitedhreachmonthnow=[...a]
            }
          }) 
          //hết dash 4
          //dash5
          this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,hangmuc},(status,data)=>{
            if(status){
             
              this.getsumwithcategoriesinpb=data  
            }
          }) 
          //hết dash 5
          //dash6
          this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,hangmuc},(status,data)=>{
            if(status){
              this.sum=0;
              let data2=JSON.parse(JSON.stringify(data))
              data.forEach(e => {
                this.sum+=e.value;
              });
              for (let i = 0; i <data2.length; i++) {
                if(this.sum!=0){
                  data2[i].value=this.hrmReportService.handlePercent(this.sum,data2[i].value);
                }
              }
              this.getpercentofeachpb=data2
            }
          }) 
          //hết dash 6
          //dash 7
          this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,hangmuc},(status,data)=>{
            if(status){
                this.getsumwithcategoriesinpbwithcuahang=data
                  nam=JSON.parse(JSON.stringify(this.body.nam))
                  this.apiService.getCountedAllHrInEachPB({nam,thang,chinhanh,hangmuc},(status2,data2)=>{
                    if(status2){
                        for (let i = 0; i < data2.length; i++) {
                            if(data2[i].value&&this.getsumwithcategoriesinpbwithcuahang[i].value){
                              data2[i].value=this.getsumwithcategoriesinpbwithcuahang[i].value/data2[i].value
                            }
                        }
                      this.getaverage=data2
                    }
                  })
            }
          }) 
          
          //hết dash 7
        nam--
        //and last year
       
        this.apiService.getSumCategoriesGroupedByMonth({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,data)=>{
          if(status){
            for (let i = 0; i < data.length; i++) {
              //dash 1
              this.getsumwithcategoriespast+=data[i].value
              //hết dash 1
              //dash 2
              if(data[i].name==thang){
                this.getsumwithmonthpast=data[i].value
              }
              //hết dash2
            }
             //dash 8
            for (let i = 0; i < data.length; i++) {
              this.getsumwithcategorieseachmonth[i].series[1].name=(nam-1).toString();
              this.getsumwithcategorieseachmonth[i].series[1].value=data[i].value;
            }
            this.getsumwithcategorieseachmonth=[...this.getsumwithcategorieseachmonth];
            //hết dash 8
            //dash 9
            if(data.length>0&&this.getsumwithcategorieseachnow.length>0){
              for (let i = 0; i < data.length; i++) {
                if(data[i].value){
                  data[i].value=this.getsumwithcategorieseachnow[i].value-data[i].value;
                  this.getsumwithcategorieseachdifferent[0].series=data;
                }
              }
            }
            else{
                this.getsumwithcategorieseachdifferent[0].series=this.getsumwithcategorieseachnow
            }
            this.getsumwithcategorieseachdifferent=[...this.getsumwithcategorieseachdifferent]
          }
          //hết dash9
          //dash11
            
            this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang,hangmuc},(status2,data2)=>{
              if(status2){
                  let data3=JSON.parse(JSON.stringify(data2))
                  if(data3.length>0){
                    for (let j = 0; j < data3.length; j++) {
                      data3[j].value=this.getsumwithcategorieseachpast[j].value/data3[j].value
                    }
                    this.getaverageeachmonthpast=data3
                    this.getaverageeachmonthpast=[...this.getaverageeachmonthpast]
                  }
              }
            })
          //hết dash11
        }) 
        //dash 10
        this.apiService.getSumCategoriesGroupedByMonth({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,data)=>{
          if(status){
            this.getaverageeachmonthpast=data
            if(data.length>0){
              for (let i = 0; i < data.length; i++) {
                data[i].value=data[i].value/this.getsumwithcategoriespast*100
              }
              this.getpercentofeachmonth=data; 
            }
            else{
              this.getpercentofeachmonth=JSON.parse(JSON.stringify(this.getsumwithcategorieseachnow))
              this.getpercentofeachmonth.forEach(element => {
                element.value=100
              });
            }
            this.getpercentofeachmonth=[...this.getpercentofeachmonth] 
          }
        })
        //dash 3
        this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
          if(status){
            let a=JSON.parse(JSON.stringify(this.getcountedhreachmonth))
            for (let i = 0; i < data.length; i++) {
               //dash 14
               a[i].series[1].name=nam
               a[i].series[1].value=data[i].value
               a[i].name=data[i].name
              if(data[i].name=thang){
                this.getcountedhrminmonthpast=data[i].value
              }
            }
            this.getcountedhreachmonth=[...a]
            //hết dash 14
          }
        }) 
        //hết dash3
        //dash15
        console.log(nam)
        this.apiService.getCountedAllNewHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
          if(status){
            console.log(data)
            for (let i = 0; i < data.length; i++) {
              this.getallnewhreachmonthpast[i].name=data.name;
              this.getallnewhreachmonthpast[i].value=data.value;
            }
            this.getallnewhreachmonthpast=[...this.getallnewhreachmonthpast]
          }
        }) 
        //hết dash 15
        //dash 16
        this.apiService.getCountedAllQuitedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
          if(status){
            console.log(data)
            for (let i = 0; i < data.length; i++) {
              this.getallquitedhreachmonthpast[i].name=data.name;
              this.getallquitedhreachmonthpast[i].value=data.value;
            }
            this.getallquitedhreachmonthpast=[...this.getallquitedhreachmonthpast]
          }
        }) 
        //hết dash 16
      }
  });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }
}
