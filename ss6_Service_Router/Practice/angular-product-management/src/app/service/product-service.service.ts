import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  findById(id: number): Product {
    return this.products.find(item => item.id === id);
  }

  editProduct(productEdit: Product): void {
    this.products.forEach(item => {
      if (item.id === productEdit.id) {
        item.name = productEdit.name;
        item.price = productEdit.price;
        item.description = productEdit.description;
      }
    });
  }

  deleteById(id: number): void {
    this.products = this.products.filter(item => item.id !== id);
  }
}
