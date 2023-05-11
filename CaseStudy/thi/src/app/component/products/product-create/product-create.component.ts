import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductType} from '../../../model/product-type';
import {ProductTypeService} from '../../../service/product-type.service';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  creatForm: FormGroup;
  productTypeList: ProductType[];

  constructor(private productTypeService: ProductTypeService,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productTypeService.getAll().subscribe(next => {
      this.productTypeList = next;
    });
    this.creatForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.min(100)]),
      status: new FormControl(null, [Validators.required]),
      productType: new FormControl('', [Validators.required])
    });
  }

  // checkAge(control: AbstractControl) {
  //   const age = control.value;
  //   if (age < 18) {
  //     return {underage: true};
  //   }
  //   return null;
  // }

  submit() {
    this.productService.saveCustomer(this.creatForm.value).subscribe(next => {
      this.router.navigateByUrl('/product/list');
      alert('Thêm mới thành công');
    });
  }
}
