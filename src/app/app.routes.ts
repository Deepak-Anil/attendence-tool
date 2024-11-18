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
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddFacultyComponent } from './admin/add-faculty/add-faculty.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'admin',  
        children:[
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: AdminComponent },
            { path: 'add-course', component: AddCourseComponent},
            { path: 'add-faculty', component:AddFacultyComponent},
            { path: 'add-student', component:AddStudentComponent},
            { path: 'reports', component: ReportsComponent}
        ]
    },
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
            { path: 'assignments', component: AssignmentsComponent },
            { path: 'grades', component: ViewGradesComponent},
            { path: 'attendance', component: ViewAttendanceComponent}
        ]
    },
    { path: '**', redirectTo: '' }
];
