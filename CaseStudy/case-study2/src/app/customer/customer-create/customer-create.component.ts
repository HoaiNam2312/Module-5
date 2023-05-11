import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerFormCreate: FormGroup;
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.customerFormCreate = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required, Validators.pattern('^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$')]),
      gender: new FormControl(null, [Validators.required]),
      idCard: new FormControl(null, [Validators.required, Validators.pattern('^\\d{9}$')]),
      // tslint:disable-next-line:max-line-length
      phone: new FormControl(null, [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      address: new FormControl(null, [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }

  submit() {
    const tmp = this.customerFormCreate.value;
    // debugger;
    // tmp.customerType = this.customerTypeService.findById(tmp.customerType);
    // console.log(tmp);
    this.customerService.saveCustomer(tmp).subscribe(next => {
      this.router.navigateByUrl('/customer/list');
    });
  }
}
