import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginError: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin(username: string, password: string) {
    this.authService.login(username, password).subscribe({
      next: (response) => {
        this.loginError = false;
        switch(response.role) {
          case 'ADMIN':
            this.router.navigate(['/admin']);
            break;
          case 'FACULTY':
            this.router.navigate(['/faculty/dashboard']);
            break;
          case 'STUDENT':
            this.router.navigate(['/student/dashboard']);
            break;
          default:
            this.loginError = true;
        }
      },
      error: () => {
        this.loginError = true;
      }
    });
  }
}
