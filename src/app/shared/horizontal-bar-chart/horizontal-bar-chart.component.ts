import { Component, OnInit,Input} from '@angular/core';
import {single, multi} from '../../service/const/dataFromApi';
import {Subscription} from 'rxjs';
import {BindingDataToRouterService} from './../../service/binding_data_to_router/binding-data-to-router.service';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {
  @Input() receivedData
  private messageSubscription: Subscription;
  single: any[];
  multi: any[];

  view: any[] = [250, 300];

  // options
  showXAxis =false;
  showYAxis = true;
  gradient =false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  tooltipDisabled=false;
  showDataLabel=true;
  roundDomains=false
  colorScheme = {
    domain: ['#f26a21','#f58730','#fcb730','#fed93e','#efd565','#d0ce73','#9ccf8b','#5ec3af'
    ,'#57c9ec','#1dafdb','#219dc3	','#33658a']
  };

  constructor(public bindingData:BindingDataToRouterService) {
    Object.assign(this, {single, multi})   
    
  }
  ngOnInit(){
    
  }
  onSelect(event) {
    console.log(event);
  }
 
  
}
