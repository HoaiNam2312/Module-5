import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = 14;
  public age = 44;
  public char = '44';
  public arr: string[] = ['A', 'B', 'C'];
  constructor() { }

  ngOnInit(): void {
  }
  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
}
