import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  // Home as default route
  { path: 'admin', component: AdminComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'student', component: StudentComponent },  // Student page route
  { path: '**', redirectTo: '' }  // Redirect unknown routes to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
