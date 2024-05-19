import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  private baseUrl = 'http://localhost:9090/api/user';
  
  constructor(private http: HttpClient) { }

  getEmployeesList(): any {
    return this.http.get(`${this.baseUrl}`);
    // `${this.baseUrl}`
  }

  saveEmployeeDetails(employee : Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,employee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
//create User - POST -  http://localhost:9090/api/user
//get User - GET - http://localhost:9090/api/user
//get User by id - GET - http://localhost:9090/api/user/id
//update user - PUT - http://localhost:9090/api/user/id
//delete user - DELETE - http://localhost:9090/api/user/id


}
