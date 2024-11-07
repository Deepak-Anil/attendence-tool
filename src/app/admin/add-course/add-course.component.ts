import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss', '../../shared/_dashboard.scss']
})
export class AddCourseComponent {
  course = {
    name: '',
    code: '',
    department: '',
    credits: '',
    description: '',
    instructor: ''
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Course added:', this.course);
      alert('Course added successfully!');
      this.router.navigate(['/admin']);
    } else {
      alert('Please fill all required fields');
    }
  }
} 