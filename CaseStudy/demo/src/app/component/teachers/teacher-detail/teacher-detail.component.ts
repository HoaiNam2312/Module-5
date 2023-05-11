import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Teacher} from '../../../model/teacher';
import {TeacherService} from '../../../service/teacher.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  @Input() teacher: Teacher;

  constructor(private activatedRoute: ActivatedRoute,
              private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    // Lấy được id để url
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const key = +paramMap.get('id');
        this.teacher = this.teacherService.findById(key);
      }
    );
  }

}
