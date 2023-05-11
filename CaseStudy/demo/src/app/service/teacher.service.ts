import {Injectable} from '@angular/core';
import {Teacher} from '../model/teacher';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>('http://localhost:3000/teachers');
  }

  save(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>('http://localhost:3000/teachers', teacher);
  }

  update(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.put<Teacher>('http://localhost:3000/teachers/' + teacher.id, teacher);
  }

  findById(id: number): Observable<Teacher> {
    return this.httpClient.get<Teacher>('http://localhost:3000/teachers?id=' + id);
  }

  search(name: string, idType: string): Observable<Teacher[]> {
    let url = 'http://localhost:3000/teachers?name_like=' + name;
    if (idType) {
      url += '&teacherType.id=' + idType;
    }

    return this.httpClient.get<Teacher[]>(url);
  }
}
