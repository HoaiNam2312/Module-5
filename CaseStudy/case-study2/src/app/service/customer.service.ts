import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerTypeService} from './customer-type.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API = 'http://localhost:3000/customers';

  constructor(private customerTypeService: CustomerTypeService,
              private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API, customer);
  }

  deleteById(id: number): Observable<Customer> {
    // this.customerList = this.customerList.filter(item => item.id !== id);
    return this.httpClient.delete<Customer>(this.API + '/' + id);
    // let params = new HttpParams();
    // params = params.append('id', String(customer.id));
    // return this.httpClient.delete<any>(this.API, { params });
  }


  search(name: string, dateStart: string, customerType: string): Observable<Customer[]> {
    let api = `http://localhost:3000/customers?name_like=${name}&customerType.id_like=${customerType}`;
    if (dateStart !== '') {
      api += `&birthday_gte=${dateStart}`;
    }
    return this.httpClient.get<Customer[]>(api);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API + '/' + id);
  }

  update(customerEdit: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API + '/' + customerEdit.id, customerEdit);
  }
}
