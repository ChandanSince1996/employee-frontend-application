import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = `${environment.baseUri}/employee`;

  constructor(private http: HttpClient) { }

  //1. save employee

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.uri}/create`, employee, {
      responseType: 'text',
    });
  }

  //2. fetch all employee

  fetchAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.uri}/all`)
  }

  //3. fetch one employee

  fetchOneEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.uri}/find/${id}`)
  }

  //4. remove employee

  removeOneEmployee(id: number) {
    return this.http.delete(`${this.uri}/remove/${id}`, {
      responseType: 'text',
    });
  }

  //5. update employee

  updateEmploye(employee: Employee) {
    return this.http.put(`${this.uri}/modify`, {
      responseType: 'text',
    });
  }

}
