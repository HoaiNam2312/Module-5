import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name = 'Nguyễn Văn A';
  link = 'https://www.facebook.com/';
  result: number;
  color: string;
  constructor() { }

  ngOnInit(): void {
  }

  sum(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber + +secondNumber;
  }
}
