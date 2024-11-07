import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss', '../shared/_dashboard.scss']
})
export class StudentComponent {
  coursePerformance = [
    { name: 'Web Development', attendance: 100 },
    { name: 'Database Systems', attendance: 80 },
    { name: 'Software Engineering', attendance: 72 },
    { name: 'Computer Networks', attendance: 55 },
    { name: 'Operating Systems', attendance: 88 }
  ];

  todayClasses = [
    { 
      time: '09:00 AM', 
      subject: 'Web Development',
      teacher: 'Aathira Miss',
      room: 'Room N107'
    },
    { 
      time: '11:00 AM', 
      subject: 'Database Systems',
      teacher: 'Vineetha Miss',
      room: 'Room N107'
    },
    { 
      time: '02:00 PM', 
      subject: 'Software Engineering',
      teacher: 'Sarath Sir',
      room: 'Room N107'
    },
    { 
      time: '04:00 PM', 
      subject: 'Computer Networks',
      teacher: 'Asha Miss',
      room: 'Room N107'
    }
  ];

  constructor(private router: Router) {}

  viewAttendance() {
    this.router.navigate(['/student/attendance']);
  }

  viewGrades() {
    this.router.navigate(['/student/grades']);
  }

  viewSchedule() {
    this.router.navigate(['/student/schedule']);
  }

  viewAssignments() {
    this.router.navigate(['/student/assignments']);
  }

  logout() {
    this.router.navigate(['/']);
  }
}
