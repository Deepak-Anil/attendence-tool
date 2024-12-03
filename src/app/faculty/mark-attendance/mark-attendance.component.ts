import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent implements OnInit {
  students = [
    { id: 1, name: 'John Doe', present: false },
    { id: 2, name: 'Jane Smith', present: false },
    { id: 3, name: 'Mike Johnson', present: false }
  ];

  selectedCourse = '';
  courses = ['Web Development', 'Database Systems', 'Software Engineering'];

  constructor(
    private router: Router,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit() {
    // Load courses and students from backend
  }

  submitAttendance() {
    const attendanceData = this.students.reduce((acc, student) => {
      acc[student.id] = student.present;
      return acc;
    }, {} as {[key: number]: boolean});

    this.attendanceService.markAttendance(1, attendanceData).subscribe({
      next: () => {
        alert('Attendance marked successfully!');
        this.router.navigate(['/faculty']);
      },
      error: (error) => {
        alert('Failed to mark attendance: ' + error.message);
      }
    });
  }

  markAll(status: boolean) {
    this.students.forEach(student => student.present = status);
  }
} 