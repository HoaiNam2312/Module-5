import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-study',
  templateUrl: './pipe-study.component.html',
  styleUrls: ['./pipe-study.component.css']
})
export class PipeStudyComponent implements OnInit {
  name = 'Nguyễn VĂN a';
  date = new Date();
  number = 10000000000;
  constructor() { }

  ngOnInit(): void {
  }

}
