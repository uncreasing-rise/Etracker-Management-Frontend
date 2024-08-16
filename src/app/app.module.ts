import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './dashboard/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { UserDetailComponent } from './user-management/user-detail/user-detail.component';
import { UserEditComponent } from './user-management/user-edit/user-edit.component';
import { ClassListComponent } from './class-management/class-list/class-list.component';
import { ClassDetailComponent } from './class-management/class-detail/class-detail.component';
import { ClassEditComponent } from './class-management/class-edit/class-edit.component';
import { AssignmentListComponent } from './assignment-management/assignment-list/assignment-list.component';
import { AssignmentDetailComponent } from './assignment-management/assignment-detail/assignment-detail.component';
import { AssignmentEditComponent } from './assignment-management/assignment-edit/assignment-edit.component';
import { QuizListComponent } from './quiz-management/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './quiz-management/quiz-detail/quiz-detail.component';
import { QuizEditComponent } from './quiz-management/quiz-edit/quiz-edit.component';
import { AttendanceListComponent } from './attendance-management/attendance-list/attendance-list.component';
import { AttendanceDetailComponent } from './attendance-management/attendance-detail/attendance-detail.component';
import { ReportsComponent } from './reports/reports.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent,
    AdminDashboardComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    ClassListComponent,
    ClassDetailComponent,
    ClassEditComponent,
    AssignmentListComponent,
    AssignmentDetailComponent,
    AssignmentEditComponent,
    QuizListComponent,
    QuizDetailComponent,
    QuizEditComponent,
    AttendanceListComponent,
    AttendanceDetailComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
