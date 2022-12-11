import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  products$?: Observable<any[]>;
  products = [
    { name: 'Haco biro pen', price: 20, stock: 12 },
    { name: 'Bic gel pen', price: 50, stock: 10 },
    { name: 'Oxford dictionary', price: 500, stock: 2 },
    { name: 'Oxford Math Set', price: 400, stock: 32 },
    { name: 'Ruler', price: 25, stock: 21 },
    { name: 'HB Pencil', price: 30, stock: 45 },
    { name: 'HB Pencil', price: 30, stock: 45 },
    { name: 'HB Pencil', price: 30, stock: 45 },
    { name: 'HB Pencil', price: 30, stock: 45 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.products$ = of(this.products);
  }
}
