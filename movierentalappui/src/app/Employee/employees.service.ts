import { employees } from '../Models/api-models/employees.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseApiUrl = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<employees[]>{
    return this.httpClient.get<employees[]>(this.baseApiUrl+'/employees');
  }
}
