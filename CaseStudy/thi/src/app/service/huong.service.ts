import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NhaBan} from '../model/nha-ban';
import {Huong} from '../model/huong';

@Injectable({
  providedIn: 'root'
})
export class HuongService {
  private API = 'http://localhost:3000/huongNha/';
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Huong[]> {
    return this.httpClient.get<Huong[]>(this.API);
  }
}
