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
    domain: ['#f58730', '#44b7e7']
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#44b7e7']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Utilization';
}

