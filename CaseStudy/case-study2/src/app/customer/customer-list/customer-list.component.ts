import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';
import * as _ from 'lodash';
// @ts-ignore
// import _ = require('lodash');

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];
  customerTypeList: CustomerType[];
  customerFormDelete: FormGroup;
  key: string;
  sortName = true;
  sortAge = true;
  title = 'pagination';
  // page: any = 1;
  // count = 0;
  // tableSize = 3;
  // tableSizes = [1, 2, 3, 4, 5];
  page = 1;
  pageSize = 3;

  // customerDelete: Customer;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    // this.customerList = this.customerService.getAll();
    this.customerService.getAll().subscribe(next => {
      this.customerList = next;
    });
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }

  openModal(customer: Customer) {
    this.customerFormDelete = new FormGroup({
      id: new FormControl(customer.id),
      name: new FormControl(customer.name),
      birthday: new FormControl(customer.birthday),
      gender: new FormControl(customer.gender),
      idCard: new FormControl(customer.idCard),
      phone: new FormControl(customer.phone),
      email: new FormControl(customer.email),
      address: new FormControl(customer.address),
      customerType: new FormControl(customer.customerType.name)
    });
    // debugger;
  }

  submit() {
    const customerDelete = this.customerFormDelete.value;
    this.customerService.deleteById(customerDelete.id).subscribe(next => {
      this.getAll();
      alert('Bạn đã xóa thành công!');
    });
  }

  search(name: string, dateStart: string, customerType: string) {
    this.customerService.search(name, dateStart, customerType).subscribe(next => {
      this.customerList = next;
    });
  }

  sortNameFun(key: string) {
    if (this.sortName) {
      this.customerList = _.orderBy(this.customerList, [key], ['asc']);
    } else {
      this.customerList = _.orderBy(this.customerList, [key], ['desc']);
    }
    this.sortName = !this.sortName;
  }

  sortAgeFun(key: string) {
    if (this.sortAge) {
      this.customerList = _.orderBy(this.customerList, [key], ['asc']);
    } else {
      this.customerList = _.orderBy(this.customerList, [key], ['desc']);
    }
    this.sortAge = !this.sortAge;
  }

  // onTableDataChange(trang: number) {
  //   this.page = trang;
  //   this.getAll();
  // }
}
