import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
@NgModule({
  declarations: [StackedAreaChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports:[StackedAreaChartComponent]
})
export class SharedModule { }
