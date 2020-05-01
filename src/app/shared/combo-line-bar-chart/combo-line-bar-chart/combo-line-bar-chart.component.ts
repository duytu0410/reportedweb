import { Component, OnInit } from '@angular/core';
import {lineChartSeries,barChart} from './../../../service/dataFromApi/dataFromApi'
@Component({
  selector: 'app-combo-line-bar-chart',
  templateUrl: './combo-line-bar-chart.component.html',
  styleUrls: ['./combo-line-bar-chart.component.css']
})
export class ComboLineBarChartComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  view = [300,300];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  legendTitle = 'Legend';
  legendPosition = 'right';
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  animations: boolean = true;
  rotateXAxisTicks:boolean=true;
  barChart: any[] = barChart;
  lineChartSeries: any[] = lineChartSeries;
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#f68979', '#fcbeb1', '#bedfb1', '#be4060']
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#be4060']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Utilization';
}

