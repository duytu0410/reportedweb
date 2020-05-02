import { Component, OnInit,DoCheck} from '@angular/core';
@Component({
  selector: 'app-hrm-report',
  templateUrl: './hrm-report.component.html',
  styleUrls: ['./hrm-report.component.css']
})
export class HrmReportComponent implements OnInit,DoCheck {
  public filterInfo; 
  constructor() {
  
  }
  ngOnInit(): void {
  }
  ngDoCheck(){
  
  }
}
