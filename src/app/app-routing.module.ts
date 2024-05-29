import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  //localhost:4200
  {path:'',component:LoginComponent},
  //localhost:4200/home
  {path:'home',component:HomeComponent},
  //localhost:4200/employee
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
