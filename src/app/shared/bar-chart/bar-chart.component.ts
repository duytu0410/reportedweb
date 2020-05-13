import { Component, OnInit } from '@angular/core';
import { single } from '../../service/const/dataFromApi';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [350, 200];

  // options
  showXAxis = false;
  showYAxis = true;
  gradient =false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#f68979', '#fcbeb1', '#bedfb1', '#be4060','#e4d4c5','61a06d','#cfdfc6']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
 
  }

  ngOnInit(): void {
  }

}
