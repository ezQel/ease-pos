import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  sortBy: 'BEST_SELLING' | 'PRICE' | 'STOCK_SIZE' = 'BEST_SELLING';
  sortingOrder: 'ASC' | 'DESC' = 'ASC';
  view: 'LIST' | 'GRID' = 'LIST';

  products$?: Observable<Array<Product>>;

  constructor() {
    this.products$ = of(products);
  }

  ngOnInit(): void {}
}

const products: Product[] = [
  {
    name: 'Haco biro pen',
    price: 20,
    stockSize: 2,
    reorderLevel: 10,
    creationDate: '',
    description: '',
    id: '1',
    modifiedDate: '',
    taxRate: 0.1,
  },
  {
    name: 'Bic gel pen',
    price: 20,
    stockSize: 20,
    reorderLevel: 10,
    creationDate: '',
    description: '',
    id: '2',
    modifiedDate: '',
    taxRate: 0.1,
  },
  {
    name: 'Oxford dictionary',
    price: 20,
    stockSize: 20,
    reorderLevel: 10,
    creationDate: '',
    description: '',
    id: '3',
    modifiedDate: '',
    taxRate: 0.1,
  },
  {
    name: 'Oxford Math Set',
    price: 20,
    stockSize: 5,
    reorderLevel: 10,
    creationDate: '',
    description: '',
    id: '4',
    modifiedDate: '',
    taxRate: 0.1,
  },
  {
    name: 'HB Pencil',
    price: 30,
    stockSize: 45,
    reorderLevel: 10,
    creationDate: '',
    description: '',
    id: '5',
    modifiedDate: '',
    taxRate: 0.1,
  },
  {
    name: 'Ruler',
    price: 20,
    stockSize: 0,
    reorderLevel: 10,
    creationDate: '',
    description: '',
    id: '6',
    modifiedDate: '',
    taxRate: 0.1,
  },
];
