import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import {single,multi} from '../../service/const/dataFromApi';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PieChartComponent implements OnInit {
  @Input() receivedData
  single: any[];
  multi: any[];
  view: any[] = [350, 200];

  // options
  showLegend = false;
  explodeSlices=false;
  colorScheme = {
    domain: ['#f58730', '#44b7e7']
  };
  // pie
  showLabels = false;
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
