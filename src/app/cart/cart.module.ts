import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-list/cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
