import { Injectable } from '@angular/core';
import productsData from '../data/products.json';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  weather: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = productsData;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((p) => p.id !== id);
  }
}
