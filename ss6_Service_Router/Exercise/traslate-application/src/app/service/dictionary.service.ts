import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord[] = [
    {
      id: 1,
      word: 'Hello',
      mean: 'Xin Chào',
    },
    {
      id: 2,
      word: 'Good Bye',
      mean: 'Chào tạm biệt',
    },
    {
      id: 3,
      word: 'Sorry',
      mean: 'Xin lỗi',
    },
    {
      id: 4,
      word: 'humorous',
      mean: 'Hài hước',
    },
    {
      id: 5,
      word: 'Tired',
      mean: 'Mệt mỏi',
    },
    {
      id: 6,
      word: 'smart',
      mean: 'Thông minh',
    },
    {
      id: 7,
      word: 'stupid',
      mean: 'Ngu',
    },
    {
      id: 8,
      word: 'Apple',
      mean: 'Quả táo',
    }
  ];

  constructor() {
  }

  findAll(): IWord[] {
    return this.wordList;
  }

  findById(id: number): IWord {
    return this.wordList.find(item => item.id === id);
  }
}
