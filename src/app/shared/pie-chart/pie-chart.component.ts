import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import {single,multi} from '../../service/const/dataFromApi';
import {filter} from './../../service/const/fiter_types_const'
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PieChartComponent implements OnInit {
  @Input() receivedData
  @Input() receivedDataForColor
  single: any[];
  multi: any[];
  view: any[] = [400, 230];

  // options
  showLegend = false;
  explodeSlices=false;
  colorScheme = {
    domain: ['#f26a21','#f58730','#fcb730','#fed93e','#efd565','#d0ce73','#9ccf8b','#5ec3af'
    ,'#57c9ec','#1dafdb','#219dc3	','#33658a']
  };
 
  // pie
  showLabels = true;
  doughnut = false;
  gradient: boolean = false;
  tooltipDisabled:boolean=false;
  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  ngOnInit(){}

}
