import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../../services/attendance.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent implements OnInit {
  attendanceData: any[] = [];

  constructor(
    private router: Router,
    private attendanceService: AttendanceService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.attendanceService.getStudentAttendance(currentUser.id).subscribe({
        next: (data) => {
          this.attendanceData = data;
        },
        error: (error) => {
          console.error('Failed to load attendance:', error);
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/student/dashboard']);
  }
} 