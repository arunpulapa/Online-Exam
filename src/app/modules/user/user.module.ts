import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ExamComponent } from './exam/exam.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    ExamComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
