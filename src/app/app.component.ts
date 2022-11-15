import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from './components/services/cart.service';
import { Observable, Observer, Subscription } from 'rxjs';
import { CartItem } from './components/models/cart-item';
import { ShoppingCart } from './components/models/shopping-cart';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public cart: Observable<ShoppingCart>;
  public cartItems: CartItem[];
  public itemCount: number;

  private _cartSubscription: Subscription;


  // Another subscription in the app.component.ts controller that gets the sum of
  // products without considering their quantity. This will count only how many
  // different products are in the shopping cart.
  public countUniqueProducts: number;
  // subscription 2 from the observable ShoppingCart that count the sum 
  // of different products
  private _countUniqueProducts: Subscription;

  public routeFound: boolean = false;
  private _event$;
  private _routes;

  constructor(private _cartService: CartService, private _router: Router) {
    this._routes = this._router.config
      .map((route) => route.path)
      .filter((route) => route != '**');
    console.log(this._routes);
    this._event$ = this._router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        let url = event.url.split('/')[1];
        console.log(url);
        this._routes.filter((route) => {
          if (route.split('/')[0] == url) {
            this.routeFound = true;
          }
        });
      }
    });
  }

  public ngOnInit(): void {
    this.cart = this._cartService.get();
    this._cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items
        .map((x) => x.quantity)
        .reduce((p, n) => p + n, 0);
    });

    // New subscription for countUniqueProducts
    // Only the unique products
    this._countUniqueProducts = this.cart.subscribe((cart) => {
      let productIds = [];
      productIds = cart.items.map((x) => x.productId);
      let uniqueProductIds = [...new Set(productIds)];
      // Gets the number of unique products
      this.countUniqueProducts = uniqueProductIds.length;
    });

  }

  public ngOnDestroy(): void {
    if (this._cartSubscription) {
      this._cartSubscription.unsubscribe();
    }
  }
}
