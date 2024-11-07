import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mark-attendance',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss', '../../shared/_dashboard.scss']
})
export class MarkAttendanceComponent {
  students = [
    { id: 1, name: 'John Doe', present: false },
    { id: 2, name: 'Jane Smith', present: false },
    { id: 3, name: 'Mike Johnson', present: false }
  ];

  selectedCourse = '';
  courses = ['Web Development', 'Database Systems', 'Software Engineering'];

  constructor(private router: Router) {}

  submitAttendance() {
    console.log('Attendance submitted:', this.students);
    alert('Attendance marked successfully!');
    this.router.navigate(['/faculty']);
  }

  markAll(status: boolean) {
    this.students.forEach(student => student.present = status);
  }
} 