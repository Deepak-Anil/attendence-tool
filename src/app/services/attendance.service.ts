import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  markAttendance(courseId: number, studentAttendance: {[key: number]: boolean}): Observable<any> {
    return this.http.post(`${this.apiUrl}/attendance/mark/${courseId}`, studentAttendance);
  }

  getStudentAttendance(studentId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/attendance/student/${studentId}`);
  }
} 