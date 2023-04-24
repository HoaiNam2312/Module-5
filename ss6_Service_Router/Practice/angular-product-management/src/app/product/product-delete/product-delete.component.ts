import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  productForm: FormGroup;

  constructor(private productService: ProductServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.product = this.productService.findById(id);
      this.productForm = new FormGroup({
        id: new FormControl(this.product.id, [Validators.required, Validators.pattern('^\\d$')]),
        name: new FormControl(this.product.name, [Validators.required, Validators.minLength(6)]),
        price: new FormControl(this.product.price, [Validators.required, Validators.min(100)]),
        description: new FormControl(this.product.description, [Validators.required])
      });
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.deleteById(product.id);
    this.router.navigateByUrl('/product/list');
  }
}
