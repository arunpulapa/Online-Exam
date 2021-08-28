import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ContatusComponent } from './components/contatus/contatus.component';
import { HomeComponent } from './components/home/home.component';
import {AdminModule} from './modules/admin/admin.module';

const routes: Routes = [
  {
    path:'',component:HeaderComponent,
    children:[
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'contactus',
        component:ContatusComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  },
  
  {
    path: 'admin',
    loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule)
  },
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
