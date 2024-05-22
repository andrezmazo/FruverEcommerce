import { Injectable } from '@angular/core';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}
