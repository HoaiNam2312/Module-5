import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherComponent} from './teacher/teacher.component';
import {TeacherCreate2Component} from './teacher-create2/teacher-create2.component';
import {TeacherDetailComponent} from './teacher-detail/teacher-detail.component';
import {TeacherEditComponent} from './teacher-edit/teacher-edit.component';


const routes: Routes = [
  {path: '', component: TeacherComponent},
  {path: 'create', component: TeacherCreate2Component},
  {path: 'detail/:id', component: TeacherDetailComponent},
  {path: 'edit/:id', component: TeacherEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
