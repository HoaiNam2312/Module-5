import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Teacher} from '../../../model/teacher';
import {TeacherService} from '../../../service/teacher.service';

@Component({
  selector: 'app-teacher-create2',
  templateUrl: './teacher-create2.component.html',
  styleUrls: ['./teacher-create2.component.css']
})
export class TeacherCreate2Component implements OnInit {

  @Output() onCreateTeacher = new EventEmitter<Teacher>();
  teacherCreate: Teacher;

  rfTeacher: FormGroup;

  teacher: Teacher = {
    id: 1,
    name: 'Nguyễn Văn A',
    salary: 50000000,
    vote: 5
  };

  constructor(private teacherService: TeacherService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.rfTeacher = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[^0-9]+$')]),
      salary: new FormControl('', [Validators.required, this.checkSalary])
    });
  }

  checkSalary(control: AbstractControl) {
    const salary = control.value;

    if (salary < 0) {
      return {ngheo: true};
    }
    if (salary > 1000000) {
      return {giau: true};
    }
    return null;
  }

  addTeacher(name: string, salary: string) {
    // this.teacherCreate = {
    //   id: 0,
    //   name,
    //   salary: +salary,
    //   vote: 0
    // };
    // this.onCreateTeacher.emit(this.teacherCreate);
    this.teacherService.save({... this.rfTeacher.value, vote: 0}).subscribe();
    this.router.navigateByUrl('/teacher');
  }

}
