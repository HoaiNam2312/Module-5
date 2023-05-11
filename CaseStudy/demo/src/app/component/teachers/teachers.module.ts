import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TeacherEditComponent],
    imports: [
        CommonModule,
        TeachersRoutingModule,
        ReactiveFormsModule
    ]
})
export class TeachersModule { }
