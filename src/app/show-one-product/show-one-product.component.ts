import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent {
  @Input() p!: Product;
  @Output() notif = new EventEmitter()
  sendDataToFather(produit: Product) {
    this.notif.emit(produit);
  }
  showMsgChild() {
    alert("let's buy some products");
  }



}
