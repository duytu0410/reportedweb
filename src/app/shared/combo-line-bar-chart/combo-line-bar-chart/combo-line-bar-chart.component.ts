import { Component, OnInit,Input } from '@angular/core';
import {barChart,lineChartSeries} from '../../../service/const/dataFromApi'
@Component({
  selector: 'app-combo-line-bar-chart',
  templateUrl: './combo-line-bar-chart.component.html',
  styleUrls: ['./combo-line-bar-chart.component.css']
})
export class ComboLineBarChartComponent implements OnInit {
    @Input() receivedData
    @Input() receivedData2
  constructor() { }
  ngOnInit(): void {
    
  }
  view = [350,300];
  showXAxis =false;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  legendTitle = 'Legend';
  legendPosition = 'right';
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = false;
  innerPadding = '10%';
  animations: boolean = true;
  rotateXAxisTicks:boolean=true;
  barChart: any[] = barChart;
  lineChartSeries: any[] = lineChartSeries;
  noBarWhenZero:boolean=true;
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

