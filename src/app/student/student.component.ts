import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  attendanceData = [
    { name: 'Math', value: 85 },
    { name: 'Science', value: 90 },
    { name: 'History', value: 75 }
  ]
  viewAttendance() {
    console.log("Viewing attendance...");
    // Implement logic to display attendance (e.g., show a modal or navigate to a new route)
  }

  viewGrades() {
    console.log("Viewing grades...");
    // Implement logic to display grades or relevant data
  }
  ;
}
