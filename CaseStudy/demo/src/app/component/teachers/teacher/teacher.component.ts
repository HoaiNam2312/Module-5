import {Component, OnInit} from '@angular/core';
import {Teacher} from '../../../model/teacher';
import {TeacherService} from '../../../service/teacher.service';
import {TeacherTypeService} from '../../../service/teacherType.service';
import {TeacherType} from '../../../model/teacherType';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherDetail: Teacher;
  teacherList: Teacher[];
  teacherTypeList: TeacherType[];

  check = true;
  // Ctrl + Alt + L
  // private teacherService: TeacherService;
  constructor(private teacherService: TeacherService, private teacherTypeService: TeacherTypeService) {
  }

  ngOnInit(): void {
    this.teacherService.findAll().subscribe(next => {
      this.teacherList = next;
    });

    this.teacherTypeService.findAll().subscribe(next => {
      this.teacherTypeList = next;
    });
  }

  changeTeacher(teacher: Teacher) {
    this.teacherDetail = teacher;
  }

  addTeacher(teacher: Teacher) {
    this.teacherList.push(teacher);
  }

  search(name: string, idType: string) {
    this.teacherService.search(name, idType).subscribe(next => {
      this.teacherList = next;
    });
  }
}
