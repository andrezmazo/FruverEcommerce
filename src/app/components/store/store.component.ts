import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert('Producto agregado al carrito!');
  }
}
