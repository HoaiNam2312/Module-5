import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {NhaBan} from '../model/nha-ban';

@Injectable({
  providedIn: 'root'
})
export class NhaBanService {
  private API = 'http://localhost:3000/cacNhaBan/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<NhaBan[]> {
    return this.httpClient.get<NhaBan[]>(this.API);
  }

  save(nhaBan: NhaBan): Observable<NhaBan> {
    return this.httpClient.post<NhaBan>(this.API, nhaBan);
  }

  search(dienTich: string, gia: string, huong: string): Observable<NhaBan[]> {
    let api = `http://localhost:3000/cacNhaBan?huong.id_like=${huong}`;

    if (dienTich !== '') {
      api += `&dienTich_gte=${+dienTich}`;
    }
    if (gia !== '') {
      api += `&gia_gte=${+gia}`;
    }
    // if (dateStart !== '') {
    //   api += `&birthday_gte=${dateStart}`;
    // }
    // if (price !== '') {
    //   api += `&price_gte=${price}`;
    // }
    return this.httpClient.get<NhaBan[]>(api);
  }
}
