import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
@NgModule({
  declarations: [StackedAreaChartComponent, HorizontalBarChartComponent, PieChartComponent, BarChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports:[
    StackedAreaChartComponent,
    HorizontalBarChartComponent,
    PieChartComponent
  ]
})
export class SharedModule { }
