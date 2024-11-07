import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss', '../../shared/_dashboard.scss']
})
export class AddStudentComponent {
  student = {
    name: '',
    email: '',
    rollNumber: '',
    course: '',
    semester: ''
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Student added:', this.student);
      // Here you would typically make an API call to save the student
      
      // Show success message (you can implement a proper notification system)
      alert('Student added successfully!');
      
      // Navigate back to admin dashboard
      this.router.navigate(['/admin']);
    } else {
      alert('Please fill all required fields');
    }
  }
} 