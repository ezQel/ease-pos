import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SellComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SellRoutingModule,
    SharedModule
  ]
})
export class SellModule { }
