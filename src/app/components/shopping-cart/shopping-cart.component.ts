import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartProductsListService } from '../services/shopping-cart-products-list.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  products: Product[];
  constructor(
    private _ShoppingCartProductsListService: ShoppingCartProductsListService
  ) {}

  ngOnInit() {
    this.products = this._ShoppingCartProductsListService.getProducts();
  }

  addToCart(product): void {
    this._ShoppingCartProductsListService.event.emit(product);
  }
}
