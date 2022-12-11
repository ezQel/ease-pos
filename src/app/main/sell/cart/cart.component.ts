import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart = [
    { name: 'Haco biro pen', price: 20, stock: 0, restockLevel: 10 },
    { name: 'Bic gel pen', price: 50, stock: 10, restockLevel: 10 },
    { name: 'Oxford dictionary', price: 500, stock: 2, quantity: 1 },
    { name: 'Oxford Math Set', price: 400, stock: 32 },
    { name: 'Ruler', price: 25, stock: 21 },
    { name: 'HB Pencil', price: 30, stock: 45 },
  ];

  constructor() {}

  ngOnInit(): void {}

  add(item: any): void {
    this.cart.push(item);
  }

  remove(item: any): void {

  }
}
