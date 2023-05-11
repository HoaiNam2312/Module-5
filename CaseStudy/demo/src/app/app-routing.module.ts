import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeacherComponent} from './component/teachers/teacher/teacher.component';
import {TeacherCreateComponent} from './component/teachers/teacher-create/teacher-create.component';
import {TeacherCreate2Component} from './component/teachers/teacher-create2/teacher-create2.component';
import {TeacherDetailComponent} from './component/teachers/teacher-detail/teacher-detail.component';


const routes: Routes = [
  {
    path: 'teacher',
    loadChildren: () => import('./component/teachers/teachers.module').then(module => module.TeachersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
