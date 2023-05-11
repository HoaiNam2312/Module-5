import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductType} from '../../../model/product-type';
import {ProductService} from '../../../service/product.service';
import {ProductTypeService} from '../../../service/product-type.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  productTypeList: ProductType[];
  // checker: boolean;

  constructor(private productService: ProductService,
              private productTypeService: ProductTypeService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(next => {
      this.productList = next;
    });
    this.productTypeService.getAll().subscribe(next => {
      this.productTypeList = next;
    });
  }

  // deleteModal() {
  //
  // }
  //
  // checkbox(id: number) {
  //   // const idd = id;
  //   this.idDeleteList.push(id);
  //   console.log(this.idDeleteList);
  // }
  checkOneCheckBox() {
    return this.productList.some(p => p.checked);
  }

  checkAllCheckBox(ev) {
    this.productList.forEach(x => x.checked = ev.target.checked);
  }

  isAllCheckBoxChecked() {
    return this.productList.every(p => p.checked);
  }

  // openModal() {
  //   const selectedProducts = this.productList.filter(product => product.checked).map(p => p.id);
  //   this.checker = selectedProducts && selectedProducts.length > 0;
  // }

  deleteProducts(): void {
    const selectedProducts = this.productList.filter(product => product.checked).map(p => p.id);
    for (const i of selectedProducts) {
      this.productService.deleteById(i).subscribe(next => {
        this.getAll();
      });
    }
  }

  search(name: string, price: string, productType: string) {
    this.productService.search(name, price, productType).subscribe(next => {
      this.productList = next;
    });
  }
}
