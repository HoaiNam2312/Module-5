import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerFormEidt: FormGroup;
  customemrTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    await this.customerTypeService.getAll().subscribe(next => {
      this.customemrTypeList = next;
    });

    await this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.customerService.findById(id).subscribe(next => {
        console.log(next);
        this.customerFormEidt = new FormGroup({
          id: new FormControl(next.id),
          name: new FormControl(next.name, [Validators.required]),
          // tslint:disable-next-line:max-line-length
          birthday: new FormControl(next.birthday, [Validators.required, Validators.pattern('^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$')]),
          gender: new FormControl(`${next.gender}`, [Validators.required]),
          idCard: new FormControl(next.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
          // tslint:disable-next-line:max-line-length
          phone: new FormControl(next.phone, [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
          email: new FormControl(next.email, [Validators.email, Validators.required]),
          address: new FormControl(next.address, [Validators.required]),
          customerType: new FormControl(this.customemrTypeList.find(item => item.id === next.customerType.id), [Validators.required])
        });
      });
    });
  }

  submit() {
    this.customerService.update(this.customerFormEidt.value).subscribe(next => {
      this.router.navigateByUrl('/customer/list');
      alert('Chỉnh sửa thành công');
    });
  }
}
