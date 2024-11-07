// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { MarkAttendanceComponent } from './faculty/mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from './student/view-attendance/view-attendance.component';
import { ViewGradesComponent } from './student/view-grades/view-grades.component';
import { ClassScheduleComponent } from './student/class-schedule/class-schedule.component';
import { AssignmentsComponent } from './student/assignments/assignments.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    {
        path: 'faculty',
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: FacultyComponent },
            { path: 'mark-attendance', component: MarkAttendanceComponent }
        ]
    },
    {
        path: 'student',
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: StudentComponent },
            { path: 'schedule', component: ClassScheduleComponent },
            { path: 'assignments', component: AssignmentsComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
