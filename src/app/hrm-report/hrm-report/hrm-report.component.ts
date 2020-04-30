import { Component, OnInit } from '@angular/core';
import {multi} from '../../shared/dataFromApi'
@Component({
  selector: 'app-hrm-report',
  templateUrl: './hrm-report.component.html',
  styleUrls: ['./hrm-report.component.css']
})
export class HrmReportComponent implements OnInit {
  constructor() {multi[0].name="vietnam" }

  ngOnInit(): void {
  }

}
