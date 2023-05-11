import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductType} from '../model/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private API = 'http://localhost:3000/productTypes/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.API);
  }
}
