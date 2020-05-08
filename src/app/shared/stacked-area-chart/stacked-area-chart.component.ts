import { Component, NgModule,OnInit,Input } from '@angular/core';
import { stacked_chart } from '../../service/const/dataFromApi';
@Component({
  selector: 'app-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.css']
})
export class StackedAreaChartComponent implements OnInit {
  @Input() receivedData
  multi: any[];
  view: any[] = [300,145];

  // options
  legend: boolean = false;
  showLabels: boolean = false;
  animations: boolean = false;
  xAxis: boolean = false;
  yAxis: boolean = false;
  gradient:boolean = false;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = false;
  trimYAxisTicks:boolean=true;
  maxYAxisTickLength:number=16;
  showGridLines:boolean=true;
  tooltipDisabled:boolean=false;
  colorScheme = {
    domain: ['#cbcbcb', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
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
