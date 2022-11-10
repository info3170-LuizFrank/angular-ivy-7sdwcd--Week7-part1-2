import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductItemComponent } from './components/products/product/product-item.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductShoppingcartComponent } from './components/products/product-shoppingcart/product-shoppingcart.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // Original configuration
      { path: 'products', component: ProductsListComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'products-list', redirectTo: '/products', pathMatch: 'full' },
      { path: 'prods', redirectTo: '/products', pathMatch: 'full' },
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      { path: 'products/:id', redirectTo: '/products', pathMatch: 'prefix' },
      { path: 'products/:productId/:rate', component: ProductDetailsComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    AboutusComponent,
    ProductItemComponent,
    ContactusComponent,
    ProductShoppingcartComponent,
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
