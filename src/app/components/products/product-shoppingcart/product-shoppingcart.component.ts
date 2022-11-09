import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-shoppingcart',
  templateUrl: './product-shoppingcart.component.html',
  styleUrls: ['./product-shoppingcart.component.css'],
})
export class ProductShoppingcartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() product: Product | null = null;
}
