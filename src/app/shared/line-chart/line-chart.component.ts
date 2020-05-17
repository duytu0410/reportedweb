import { Component, OnInit,Input } from '@angular/core';
import {multi,lineChart} from '../../service/const/dataFromApi'
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() receivedData
  @Input() receivedSize
  lineChart: any[];
  view: any[] = [270, 200];

  // options
  legend: boolean =false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean =false;
  yAxis: boolean = false;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = false;
  tooltipDisabled:boolean=false;
  colorScheme = {
    domain: ['#f58730', '#44b7e7']
  };

  constructor() {
    Object.assign(this, { lineChart });
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
  }

}
