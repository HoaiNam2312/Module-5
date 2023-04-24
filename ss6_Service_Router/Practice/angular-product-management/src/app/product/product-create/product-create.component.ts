import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(private productService: ProductServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(null, [Validators.required, Validators.pattern('^\\d$')]),
      name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      price: new FormControl(null, [Validators.required, Validators.min(100)]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.router.navigateByUrl('/product/list');
  }
}
