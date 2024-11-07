import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-schedule',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './class-schedule.component.html',
  styleUrls: ['../../shared/_dashboard.scss']
})
export class ClassScheduleComponent {
  weekSchedule = {
    Monday: [
      { time: '09:00 AM', subject: 'Web Development', teacher: 'Aathira Miss', room: 'Room N107' },
      { time: '11:00 AM', subject: 'Database Systems', teacher: 'Vineetha Miss', room: 'Room N107' }
    ],
    Tuesday: [
      { time: '10:00 AM', subject: 'Software Engineering', teacher: 'Sarath Sir', room: 'Room N107' },
      { time: '02:00 PM', subject: 'Computer Networks', teacher: 'Asha Miss', room: 'Room N107' }
    ],
    Wednesday: [
      { time: '09:00 AM', subject: 'Operating Systems', teacher: 'Vineetha Miss', room: 'Room N107' },
      { time: '11:00 AM', subject: 'Web Development', teacher: 'Aathira Miss', room: 'Room N107' }
    ],
    Thursday: [
      { time: '10:00 AM', subject: 'Database Systems', teacher: 'Vineetha Miss', room: 'Room N107' },
      { time: '02:00 PM', subject: 'Software Engineering', teacher: 'Sarath Sir', room: 'Room N107' }
    ],
    Friday: [
      { time: '09:00 AM', subject: 'Computer Networks', teacher: 'Asha Miss', room: 'Room N107' },
      { time: '11:00 AM', subject: 'Operating Systems', teacher: 'Vineetha Miss', room: 'Room N107' }
    ]
  };

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/student/dashboard']);
  }
} 