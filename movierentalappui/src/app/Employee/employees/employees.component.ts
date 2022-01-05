import { EmployeesService } from '../employees.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeesservice: EmployeesService) { }

  ngOnInit(): void {
    this.employeesservice.getEmployees().subscribe(
        (successResponse) =>{
          console.log(successResponse);
        },
        (errorResponse) =>{
          console.log(errorResponse);
        }
    )
    }
  }
