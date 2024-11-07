import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ViewAttendanceComponent } from './student/view-attendance/view-attendance.component';
import { MarkAttendanceComponent } from './faculty/mark-attendance/mark-attendance.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddFacultyComponent } from './admin/add-faculty/add-faculty.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add-student', component: AddStudentComponent },
  { path: 'admin/add-faculty', component: AddFacultyComponent },
  { path: 'admin/add-course', component: AddCourseComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/attendance', component: ViewAttendanceComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'faculty/mark-attendance', component: MarkAttendanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
