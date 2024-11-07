import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-faculty',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss', '../../shared/_dashboard.scss']
})
export class AddFacultyComponent {
  faculty = {
    name: '',
    email: '',
    employeeId: '',
    department: '',
    designation: '',
    subjects: ''
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Faculty added:', this.faculty);
      alert('Faculty added successfully!');
      this.router.navigate(['/admin']);
    } else {
      alert('Please fill all required fields');
    }
  }
} 