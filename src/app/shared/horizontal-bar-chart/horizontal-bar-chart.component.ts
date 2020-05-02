import { Component, OnInit } from '@angular/core';
import {single, multi} from '../../service/dataFromApi/dataFromApi';
@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [300, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  colorScheme = {
    domain: ['#a5cca7','#deeaea', '#cde2ef','#90b39d','#d9889b','#f7dcd3', '#bdd6e8','#c3e6bc','#d6879b','#fdcec5','#7f9bb5']
  };

  constructor() {
    Object.assign(this, {single, multi})   
  }
  ngOnInit(){}
  onSelect(event) {
    console.log(event);
  }
  

}