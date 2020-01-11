import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private baseURL = 'http://localhost:8080/student';
  
  constructor(private http: HttpClient) { } 

  saveStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}/saveStudent`, student);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/getById/${id}`);
  }
  
  updateStudent(id: number, value:any): Observable<Object> {
    return this.http.put(`${this.baseURL}/updateStudent/${id}`, value);
  }
  
  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseURL}/listStudent`);
  }
  
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/deleteStudent/${id}`, { responseType: 'text'});
  }

}
