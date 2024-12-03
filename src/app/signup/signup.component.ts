import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
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

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSignup(form: NgForm) {
    if (form.valid) {
      if (this.user.password !== this.user.confirmPassword) {
        this.signupError = 'Passwords do not match!';
        return;
      }

      this.authService.signup(this.user).subscribe({
        next: () => {
          alert('Registration successful! Please login.');
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.signupError = error.error.message || 'Registration failed!';
        }
      });
    } else {
      this.signupError = 'Please fill all required fields correctly.';
    }
  }
} 