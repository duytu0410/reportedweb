import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './components/main-layout/main-layout.component'
const routes: Routes = [
    {
      path:'',
      redirectTo:'/mainlayout',
      pathMatch:'full'
    },
    {
      path:'mainlayout',
      component:MainLayoutComponent,
      loadChildren: () => import('./hrm-report/hrm-report.module').then(item => item.HrmReportModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
