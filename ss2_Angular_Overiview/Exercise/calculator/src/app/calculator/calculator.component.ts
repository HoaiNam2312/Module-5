import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public result = "";
  constructor() { }

  ngOnInit(): void {
  }

  val(value:string){
    this.result += value;
  }

  calculate(result: string) {
    this.result = eval(result);
  }

  clearResult() {
    this.result = "";
  }
}
