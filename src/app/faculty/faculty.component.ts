import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss', '../shared/_dashboard.scss']
})
export class FacultyComponent {
  constructor(private router: Router) {}

  viewAttendance() {
    this.router.navigate(['/faculty/mark-attendance']);
  }

  viewReports() {
    // Add reports view logic
  }

  viewSchedule() {
    // Add schedule view logic
  }

  viewStudents() {
    // Add students view logic
  }

  logout() {
    localStorage.clear(); // Clear any stored session data
    this.router.navigate(['/']);
  }
}
