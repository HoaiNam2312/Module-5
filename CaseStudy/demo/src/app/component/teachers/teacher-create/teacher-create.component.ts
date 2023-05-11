import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Teacher} from '../../../model/teacher';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {
  @Output() onCreateTeacher = new EventEmitter<Teacher>();
  teacherCreate: Teacher;

  teacher: Teacher = {
    id: 1,
    name: 'Nguyễn Văn A',
    salary: 50000000,
    vote: 5
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  addTeacher(name: string, salary: string) {
    this.teacherCreate = {
      id: 0,
      name,
      salary: +salary,
      vote: 0
    };
    this.onCreateTeacher.emit(this.teacherCreate);
  }
}
