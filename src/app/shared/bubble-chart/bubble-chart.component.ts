import { Component, OnInit,Input } from '@angular/core';
import {bubbleData} from '../../service/const/dataFromApi'
@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {
  @Input() receivedData
  bubbleData: any[];
  view: any[] = [350, 200];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = 'Population';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Years';
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;
  xScaleMax: number =85;
  xScaleMin:number=70
  colorScheme = {
    domain: ['#f68979', '#fcbeb1', '#bedfb1', '#be4060','#e4d4c5','61a06d','#cfdfc6']
  };

  constructor() {
    Object.assign(this, { bubbleData });
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
