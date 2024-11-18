import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginError: boolean = false;

  validCredentials = {
    admin: 'admin123',
    faculty1: 'faculty123',
    student1: 'student123'
  };

  constructor(private router: Router) {}

  onLogin(username: string, password: string) {
    if (this.validCredentials[username as keyof typeof this.validCredentials] === password) {
      this.loginError = false;
      
      switch(username) {
        case 'admin':
          this.router.navigate(['/admin']);
          break;
        case 'faculty1':
          this.router.navigate(['/faculty/dashboard']);
          break;
        case 'student1':
          this.router.navigate(['/student/dashboard']);
          break;
        default:
          this.loginError = true;
          break;
      }
    } else {
      this.loginError = true;
    }
  }
}
