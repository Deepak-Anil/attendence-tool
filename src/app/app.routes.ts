// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin', component: AdminComponent },  // Placeholder for Admin Dashboard
    { path: 'faculty', component: FacultyComponent },  // Placeholder for Faculty Dashboard
    { path: 'student', component: StudentComponent }  // Placeholder for Student Dashboard
];
