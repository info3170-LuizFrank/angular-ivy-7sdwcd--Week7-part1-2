import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartProductsListService {
  constructor() {}

  @Output() event = new EventEmitter();

  getProducts() {
    return [
      {
        id: 2,
        name: 'product 2',
        description: 'product 2 description',
        pictureUrl:
          'https://secure.img1-fg.wfcdn.com/im/95803844/resize-h755-w755%5Ecompr-r85/2226/222679290/Arbre+%C3%A0+bonsai+pin+en+pot.jpg',
        altPicture: 'Bonsai tree in pottery again',
        price: 76.99,
        quantity: 10,
      },
    ];
  }
}
