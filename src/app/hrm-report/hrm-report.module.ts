import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmReportComponent } from './components/hrm-report/hrm-report.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from './../shared/shared.module';
const ROUTE : Routes = [
  {
    path: '',
    component: HrmReportComponent,
  }
]

@NgModule({
  declarations: [HrmReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTE)
  ]
})
export class HrmReportModule { }
