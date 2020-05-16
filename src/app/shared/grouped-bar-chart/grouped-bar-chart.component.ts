import { Component, OnInit,Input } from '@angular/core';
import {multi} from '../../service/const/dataFromApi'
@Component({
  selector: 'app-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  styleUrls: ['./grouped-bar-chart.component.css']
})
export class GroupedBarChartComponent implements OnInit {
  @Input() receivedData
  multi: any[];
  view: any[] = [400, 200];

  // options
  showXAxis: boolean = false;
  showYAxis: boolean =true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';
  tooltipDisabled=false;
  showGridLines=false
  barPadding:number=2;
  groupPadding:number=4;
  showDataLabel=false;
  colorScheme = {
    domain: ['#f58730', '#44b7e7', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi })
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
