import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API = 'http://localhost:3000/products/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API);
  }

  saveCustomer(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.API, product);
  }

  deleteById(id: number): Observable<Product[]> {
    return this.httpClient.delete<Product[]>(this.API + id);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API + id);
  }

  update(productEdit: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.API + productEdit.id, productEdit);
  }

  search(name: string, price: string, customerType: string): Observable<Product[]> {
    let api = `http://localhost:3000/products?name_like=${name}&productType.id_like=${customerType}`;
    // if (dateStart !== '') {
    //   api += `&birthday_gte=${dateStart}`;
    // }
    if (price !== '') {
      api += `&price_gte=${price}`;
    }
    return this.httpClient.get<Product[]>(api);
  }
}
