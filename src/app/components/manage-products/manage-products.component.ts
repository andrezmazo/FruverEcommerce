import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    weather: 'all',
  };

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  addProduct(): void {
    this.newProduct.id = this.products.length + 1;
    this.productService.addProduct(this.newProduct);
    this.newProduct = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      weather: 'all',
    };
  }

  editProduct(product: Product): void {
    this.productService.updateProduct(product);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
  }
}
