import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss', '../../shared/_dashboard.scss']
})
export class AssignmentsComponent {
  assignments = [
    {
      subject: 'Web Development',
      title: 'Angular Project',
      dueDate: '2024-03-25',
      status: 'pending',
      description: 'Create a full-stack web application using Angular'
    },
    {
      subject: 'Database Systems',
      title: 'SQL Queries',
      dueDate: '2024-03-20',
      status: 'submitted',
      description: 'Complete the set of SQL queries for database optimization'
    },
    {
      subject: 'Software Engineering',
      title: 'Use Case Diagram',
      dueDate: '2024-03-22',
      status: 'pending',
      description: 'Create use case diagrams for the attendance management system'
    }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/student/dashboard']);
  }
} 