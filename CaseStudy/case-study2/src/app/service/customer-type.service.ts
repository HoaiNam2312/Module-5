import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = [
    {
      id: 1,
      name: 'Diamond'
    },
    {
      id: 2,
      name: 'Palatinium'
    },
    {
      id: 3,
      name: 'Gold'
    },
    {
      id: 4,
      name: 'Silver'
    },
    {
      id: 5,
      name: 'Member'
    },
  ];

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<CustomerType[]>('http://localhost:3000/customerTypes');
  }

  findById(id: number) {
    return this.customerTypeList.find(item => item.id === id);
  }
}
