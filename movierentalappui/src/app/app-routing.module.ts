import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:'employees',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
