import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-attendance',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss', '../../shared/_dashboard.scss']
})
export class ViewAttendanceComponent {
  attendanceData = [
    { 
      subject: 'Web Development',
      total: 45,
      present: 43,
      percentage: 95.6
    },
    { 
      subject: 'Database Systems',
      total: 40,
      present: 32,
      percentage: 80.0
    },
    { 
      subject: 'Software Engineering',
      total: 38,
      present: 28,
      percentage: 73.7
    },
    { 
      subject: 'Computer Networks',
      total: 42,
      present: 24,
      percentage: 57.1
    },
    { 
      subject: 'Operating Systems',
      total: 36,
      present: 32,
      percentage: 88.9
    }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/student/dashboard']);
  }
} 