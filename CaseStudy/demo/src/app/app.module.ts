import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TeacherComponent } from './component/teachers/teacher/teacher.component';
import { PipeStudyComponent } from './component/pipe-study/pipe-study.component';
import { ChildComponent } from './component/child/child.component';
import { TeacherDetailComponent } from './component/teachers/teacher-detail/teacher-detail.component';
import { TeacherCreateComponent } from './component/teachers/teacher-create/teacher-create.component';
import { TeacherCreate2Component } from './component/teachers/teacher-create2/teacher-create2.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './component/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    PipeStudyComponent,
    ChildComponent,
    TeacherDetailComponent,
    TeacherCreateComponent,
    TeacherCreate2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
