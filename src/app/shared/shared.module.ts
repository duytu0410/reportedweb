import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { GroupedBarChartComponent } from './grouped-bar-chart/grouped-bar-chart.component';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './combo-chart';
@NgModule({
  declarations: [
    StackedAreaChartComponent,
    HorizontalBarChartComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    BubbleChartComponent,
    GroupedBarChartComponent,
    ComboChartComponent, 
    ComboSeriesVerticalComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports:[
    StackedAreaChartComponent,
    HorizontalBarChartComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    BubbleChartComponent,
    GroupedBarChartComponent
  ]
})
export class SharedModule { }
