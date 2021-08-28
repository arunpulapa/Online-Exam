import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { ExportExamsComponent } from './export-exams/export-exams.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
  children:[
    {path:'userinfo',component:AllUsersComponent},
  { path:'export-exam',component:ExportExamsComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
