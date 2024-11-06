import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.scss'
})
export class FacultyComponent {
  attendanceForm: FormGroup;
  courses = ['Math', 'Science', 'History'];

  constructor(private fb: FormBuilder) {
    this.attendanceForm = this.fb.group({
      course: [''],
      date: ['']
    });
  }

  submitAttendance() {
    console.log('Attendance Data:', this.attendanceForm.value);
  }
}
