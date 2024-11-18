import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user = {
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: ''
  };

  signupError: string = '';

  constructor(private router: Router) {}

  onSignup(form: NgForm) {
    if (form.valid) {
      if (this.user.password !== this.user.confirmPassword) {
        this.signupError = 'Passwords do not match!';
        return;
      }

      // Here you would typically make an API call to register the user
      console.log('User registered:', this.user);
      
      // Show success message
      alert('Registration successful! Please login.');
      
      // Navigate to login page
      this.router.navigate(['/']);
    } else {
      this.signupError = 'Please fill all required fields correctly.';
    }
  }
} 