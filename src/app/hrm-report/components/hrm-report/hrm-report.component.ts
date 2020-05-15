import { Component, OnInit, OnDestroy} from '@angular/core';
import {BindingDataToRouterService} from './../../../service/binding_data_to_router/binding-data-to-router.service';
import {Subscription,Subject,Observable} from 'rxjs';
import {filter,nam,thang,hangmuc} from '../../../service/const/fiter_types_const';
import {single,multi2,lineChart,barChart,lineChartSeries,bubbleData} from './../../../service/const/dataFromApi'
import {ApiService} from './../../../service/api/api.service';
import {HrmReportService} from './../../service/hrm-report.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-hrm-report',
  templateUrl: './hrm-report.component.html',
  styleUrls: ['./hrm-report.component.css']
})
export class HrmReportComponent implements OnInit,OnDestroy {
  filterForm;
  public subscription:Subscription;
  private messageSubscription: Subscription;
  
  public title:string="Tổng thu nhập"
 
  
  //dash6
  public getpercentofeachpb;
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
    public hrmReportService:HrmReportService,
    private formBuilder: FormBuilder,
    ) {
      this.filterForm = this.formBuilder.group({
        "nam": [2019, Validators.required],
        "thang": [2, Validators.required],
        "chinhanh":['Hà Nội', Validators.required],
        "phongban":['Accounting', Validators.required],
        "cuahang":['', Validators.required],
        "manv":['NV01', Validators.required],
        "hangmuc":['Tổng thu nhập', Validators.required],
      });
      this.hrmReportService.filter=filter;
      this.hrmReportService.years=nam;
      this.hrmReportService.months=thang;
      this.apiService.getPhongBan((status,data)=>{
        if(status){
          this.hrmReportService.filter[1].view=data
        }
      })
      this.apiService.getCuaHang((status,data)=>{
        if(status){
          this.hrmReportService.filter[2].view=data
        }
      })
      this.apiService.getMaNv((status,data)=>{
        if(status){
         this.hrmReportService.filter[3].view=data
        }
      })
      this.apiService.getChiNhanh((status,data)=>{
        if(status){
          this.hrmReportService.filter[0].view=data
        }
      })
    
  }
  ngOnInit(): void {
   
    // when filter button is clicked:
  //   this.messageSubscription = this.bindingData.message.subscribe(m => {
  //     if(m){
        
  //     }
  // });
  }
  onSubmit(data){
    this.hrmReportService.body=JSON.parse(JSON.stringify(data));
    this.hrmReportService.nam=this.hrmReportService.body.nam;
    this.hrmReportService.thang=this.hrmReportService.body.thang;
    this.title=this.hrmReportService.body.hangmuc;
    this.getsumwithcategorieseachdifferent[0].name=this.title+" năm "+this.hrmReportService.nam+" và "+(this.hrmReportService.nam-1)
    let nam=this.hrmReportService.body.nam;
    let thang=Number(this.hrmReportService.body.thang);
    let chinhanh=this.hrmReportService.body.chinhanh;
    let phongban=this.hrmReportService.body.phongban;
    let cuahang=this.hrmReportService.body.cuahang;
    let hangmuc=this.hrmReportService.body.hangmuc;
    //chuyển hạng mục về đúng kiểu để gửi api
    for (let i = 0; i < this.hrmReportService.filter[4].view.length; i++) {
      if(hangmuc==this.hrmReportService.filter[4].view[i]){
        hangmuc=this.hrmReportService.filter[4].value[i]
     
      }
    }
    let manv=this.hrmReportService.body.manv;
    //get sum with categories this year
    this.hrmReportService.getsumwithcategoriesnow=0;
    this.hrmReportService.getsumwithcategoriespast=0;
    this.hrmReportService.getsumwithmonthnow=0;
    this.hrmReportService.getsumwithmonthpast=0;
    this.hrmReportService.getcountedhrminmonthnow=0;
    this.hrmReportService.getcountedhrminmonthpast=0;
    this.hrmReportService.getcountedallnewhr=0;
    this.hrmReportService.getcountedallquitedhr=0;
    this.hrmReportService.sum=0;
     //dash1,2,8
      this.apiService.getSumCategoriesGroupedByMonth({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,data)=>{
        if(status){
          //dash1
          let data1a=JSON.parse(JSON.stringify(data))
          let data2a=JSON.parse(JSON.stringify(data))
          for (let i = 0; i < data1a.length; i++) {
            this.hrmReportService.getsumwithcategoriesnow+=data1a[i].value
          //hết dash1
          //dash2  
            if(data2a[i].name==thang){
              this.hrmReportService.getsumwithmonthnow=data2a[i].value
            }
          }
          //hết dash 2
        }
      }) 
      //dash 3
      this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
        if(status){
          let data3a=JSON.parse(JSON.stringify(data))
          for (let i = 0; i< data3a.length; i++) {
           if(data3a[i].name==this.hrmReportService.thang){
             this.hrmReportService.getcountedhrminmonthnow=data3a[i].value
           }
          }
        }
      })
      //hết dash 3
      //dash 4
      this.apiService.getCountedAllNewHrGroupedByMonth({nam,chinhanh,cuahang},(status,data)=>{
        if(status){
          let data4a=JSON.parse(JSON.stringify(data))
          for (let i = 0; i < data4a.length; i++) {
            if(data4a[i].name==thang){
              this.hrmReportService.getcountedallnewhr=data4a[i].value
            }
          }
        }
      }) 
      //dash 4
      this.apiService.getCountedAllQuitedHrGroupedByMonth({nam,chinhanh,cuahang},(status,data)=>{
        if(status){
          let data4b=JSON.parse(JSON.stringify(data))
          for (let i = 0; i < data4b.length; i++) {
            if(data4b[i].name==thang){
              this.hrmReportService.getcountedallquitedhr=data4b[i].value
            }
          }
        }
      }) 
      //hết dash 4
     
      this.apiService.getSumWithCategoriesInPb({nam,thang,chinhanh,hangmuc},(status,data)=>{
        if(status){
          //dash5
          this.hrmReportService.getsumwithcategoriesinpb=JSON.parse(JSON.stringify(data)) 
          //hết dash 5
          //dash 6
          let data6=JSON.parse(JSON.stringify(data))
          for (let i = 0; i < data6.length; i++) {
            this.hrmReportService.sum+=data6[i].value
          }
          console.log(this.hrmReportService.sum)
          for (let i = 0; i <data6.length; i++) {
            if(this.hrmReportService.sum!=0){
              data6[i].value=this.hrmReportService.handlePercent(this.hrmReportService.sum,data6[i].value);
            }
          }
          this.getpercentofeachpb=data6
          //hết dash 6
          //dash 7
          let data7=JSON.parse(JSON.stringify(data))
          this.apiService.getCountedAllHrInEachPB({nam,thang,chinhanh,hangmuc},(status2,data2)=>{
            if(status2){
              let data7a=JSON.parse(JSON.stringify(data2))
                for (let i = 0; i < data7a.length; i++) {
                    if(data7a[i].value&&data7[i].value){
                      data7a[i].value=data7[i].value/data[i].value
                    }
                }
              this.getaverage=data7a
            }
          })
          //hết dash 7
        }
      }) 
    
    nam--
    //and last year
   
    this.apiService.getSumCategoriesGroupedByMonth({nam,chinhanh,phongban,cuahang,manv,hangmuc},(status,data)=>{
      if(status){
        let data1b=JSON.parse(JSON.stringify(data))
        let data2b=JSON.parse(JSON.stringify(data))
        for (let i = 0; i < data1b.length; i++) {
          //dash 1
          this.hrmReportService.getsumwithcategoriespast+=data1b[i].value
          //hết dash 1
          //dash 2
          if(data2b[i].name==thang){
            this.hrmReportService.getsumwithmonthpast=data2b[i].value
          }
          //hết dash2
        }
      }
    }) 
     //dash 3
     this.apiService.getCountedHrGroupedByMonth({nam,chinhanh,phongban,cuahang},(status,data)=>{
      if(status){
        let data3b=JSON.parse(JSON.stringify(data))
        for (let i = 0; i< data3b.length; i++) {
         if(data3b[i].name==this.hrmReportService.thang){
           this.hrmReportService.getcountedhrminmonthpast=data3b[i].value
         }
        }
      }
    })
    //hết dash 3
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }
}
