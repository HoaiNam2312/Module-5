import {Component, OnInit} from '@angular/core';
import {IWord} from '../../model/iword';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  wordList: IWord[];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.wordList = this.dictionaryService.findAll();
  }
}
