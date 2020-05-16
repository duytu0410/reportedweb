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

  view: any[] = [320, 200];

  // options
  showXAxis =false;
  showYAxis = true;
  gradient =false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  tooltipDisabled=false
  colorScheme = {
    domain: ['#f58730', '#44b7e7']
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
