import {ProductType} from './product-type';

export interface Product {
  id?: number;
  name: string;
  price: number;
  status: string;
  productType: ProductType;
  checked?: boolean;
}
