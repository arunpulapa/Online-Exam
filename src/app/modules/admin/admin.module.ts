import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ExportExamsComponent } from './export-exams/export-exams.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AllUsersComponent,
    ExportExamsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
