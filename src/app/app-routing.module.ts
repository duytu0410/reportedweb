import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './components/main-layout/main-layout.component'
import {LoginComponent} from './components/login/login.component'
const routes: Routes = [
    {
      path:'',
      redirectTo:'',
      pathMatch:'full',
      component:LoginComponent
    },
    {
      path:'hrm',
      loadChildren: () => import('./hrm-report/hrm-report.module').then(item => item.HrmReportModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
