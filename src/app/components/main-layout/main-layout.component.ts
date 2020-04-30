import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public years=[2018,2019,2020,2021];
  public months=[1,2,3,4,5,6,7,8,9,10,11,12] 
  constructor(private router: Router) {}

ngOnInit(): void {
 
}

}
