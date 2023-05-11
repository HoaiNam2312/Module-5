import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductType} from '../../../model/product-type';
import {ProductTypeService} from '../../../service/product-type.service';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  productTypeList: ProductType[];

  constructor(private productTypeService: ProductTypeService,
              private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productTypeService.getAll().subscribe(next => {
      this.productTypeList = next;
    });

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.productService.findById(id).subscribe(next => {
        this.editForm = new FormGroup({
          id: new FormControl(next.id),
          name: new FormControl(next.name, [Validators.required]),
          price: new FormControl(next.price, [Validators.required]),
          status: new FormControl(next.status, [Validators.required]),
          productType: new FormControl(this.productTypeList.find(item => item.id === next.productType.id), [Validators.required])
        });
      });
    });
  }

  submit() {
    this.productService.update(this.editForm.value).subscribe(next => {
      this.router.navigateByUrl('product/list');
      alert('Chỉnh sửa thành công');
    });
  }
}
