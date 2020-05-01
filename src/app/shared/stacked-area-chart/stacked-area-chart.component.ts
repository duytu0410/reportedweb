import { Component, NgModule,OnInit } from '@angular/core';
import { stacked_chart } from './../../service/dataFromApi/dataFromApi';
@Component({
  selector: 'app-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.css']
})
export class StackedAreaChartComponent implements OnInit {
  multi: any[];
  view: any[] = [300,145];

  // options
  legend: boolean = false;
  showLabels: boolean = false;
  animations: boolean = false;
  xAxis: boolean = false;
  yAxis: boolean = false;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = false;
  trimYAxisTicks:boolean=true;
  maxYAxisTickLength:number=5;
  showGridLines:boolean=false;
  tooltipDisabled:boolean=true;
  colorScheme = {
    domain: ['#f5f5f5', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  constructor() {
    this.multi=stacked_chart
   }

  ngOnInit(): void {
  }
    
  
  onSelect(event) {
    console.log(event);
  }
}
