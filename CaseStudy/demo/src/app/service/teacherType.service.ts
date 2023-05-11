import {Injectable} from '@angular/core';
import {Teacher} from '../model/teacher';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeacherType} from '../model/teacherType';

@Injectable({
  providedIn: 'root'
})
export class TeacherTypeService {
  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<TeacherType[]> {
    return this.httpClient.get<TeacherType[]>('http://localhost:3000/teacherTypes');
  }
}
