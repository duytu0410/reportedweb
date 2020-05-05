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
  showLegend = true;
  explodeSlices=false;
  colorScheme = {
    domain: ['#f68979', '#fcbeb1', '#bedfb1', '#be4060','#e4d4c5','61a06d','#cfdfc6']
  };

  // pie
  showLabels = false;
  doughnut = false;
  gradient: boolean = true;
  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  ngOnInit(){}

}
