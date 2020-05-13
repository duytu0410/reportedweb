import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmReportComponent } from './components/hrm-report/hrm-report.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from './../shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTE)
  ]
})
export class HrmReportModule { }
