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
    domain: ['#f58730','#FF000B','#FFA8AC','#FF4700','#51FFA9','#51FFFF','#51A9FF','#FFF900','#C133CB','#01FF00','#46A7B8	','#4D2286']
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
