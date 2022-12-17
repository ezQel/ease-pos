import { Component } from '@angular/core';
import { CartItem } from 'src/app/interfaces/cartItem';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  private cartItems: Map<string, CartItem>;

  constructor() {
    this.cartItems = new Map();
  }

  /**
   * An array of the items in the cart
   */
  get cart(): Array<CartItem> {
    return Array.from(this.cartItems.values());
  }

  /**
   * The total price of the cart
   */
  get total(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  /**
   * Adds a product to the cart or increases its quantity if it already exists
   * @param product The product to be added to the cart
   * @param quantity The quantity of the product
   */
  add(product: Product, inputEvent?: Event | { target: any }): void {
    let cartItem = this.cartItems.get(product.id); // get cart item that has the product

    if (cartItem) {
      const quantity = inputEvent?.target?.value;

      // Do not increase the quantity if it equals the product's available stock size
      if (cartItem.quantity === product.stockSize) {
        return;
      }

      // Increase the quantity by one or set it to the specified quantity if quantity is specified
      cartItem.quantity = quantity ? quantity : cartItem.quantity + 1;

      // Calculate the new price
      cartItem.price = cartItem.quantity * cartItem.product.price;
      return;
    }

    // Do not add a product that is out of stock
    if (product.stockSize === 0) {
      return;
    }

    // Create new cart item with the product if it does not exist and add id to the cart items map
    cartItem = { quantity: 1, product, price: product.price };
    this.cartItems.set(product.id, cartItem);
  }

  /**
   * Remove product with specified id from the cart
   * @param id The id of the product to be removed
   */
  remove(id: any): void {
    this.cartItems.delete(id);
  }

  clear(): void {
    this.cartItems.clear();
  }

  checkout(): void {}
}
