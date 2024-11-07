import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-grades',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './view-grades.component.html',
  styleUrls: ['./view-grades.component.scss', '../../shared/_dashboard.scss']
})
export class ViewGradesComponent {
  grades = [
    { 
      subject: 'Web Development',
      assignments: 92,
      midterm: 88,
      final: 90,
      grade: 'A'
    },
    { 
      subject: 'Database Systems',
      assignments: 85,
      midterm: 78,
      final: 82,
      grade: 'B+'
    },
    { 
      subject: 'Software Engineering',
      assignments: 88,
      midterm: 85,
      final: 87,
      grade: 'A-'
    },
    { 
      subject: 'Computer Networks',
      assignments: 75,
      midterm: 72,
      final: 78,
      grade: 'B'
    },
    { 
      subject: 'Operating Systems',
      assignments: 90,
      midterm: 92,
      final: 88,
      grade: 'A'
    }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/student/dashboard']);
  }
} 