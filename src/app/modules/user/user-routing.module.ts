import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
  {path:'',component:UserDashboardComponent,
  children:[
    {path:'profile',component:ProfileComponent},
  { path:'exam',component:ExamComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
