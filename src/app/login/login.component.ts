import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginError: boolean = false;

  // Valid credentials
  validCredentials: { [key: string]: string } = {
    admin: 'admin123',
    faculty1: 'faculty123',
    student1: 'student123'
  };

  constructor(private router: Router) {}

  onLogin(username: string, password: string) {
    // Type assertion to inform TypeScript that the key exists
    if (this.validCredentials[username as keyof typeof this.validCredentials] === password) {
      if (username === 'admin') {
        this.router.navigate(['/admin']);
      } else if (username.startsWith('faculty')) {
        this.router.navigate(['/faculty']);
      } else {
        this.router.navigate(['/student']);
      }
    } else {
      console.log("Invalid credentials");
      this.loginError = true;
    }
  }
}

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule]
})
export class LoginModule {}
