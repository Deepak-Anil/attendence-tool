import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', '../shared/_dashboard.scss']
})
export class AdminComponent {
  constructor(private router: Router) {}

  addNewStudent() {
    this.router.navigate(['/admin/add-student']);
  }

  addNewFaculty() {
    this.router.navigate(['/admin/add-faculty']);
  }

  addNewCourse() {
    this.router.navigate(['/admin/add-course']);
  }

  generateReports() {
    this.router.navigate(['/admin/reports']);
  }

  logout() {
    this.router.navigate(['/']);
  }
}
