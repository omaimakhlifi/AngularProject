import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'/*l'instance bch tkoun partage par tous les composants*/
})
export class ProductService {
  private listproducts: Product[];
  constructor() {
    console.log("init new instance");


    this.listproducts = [
      { id: 1, title: 'produit1', price: 20, quantity: 10, like: 0, image: "" },
      { id: 2, title: 'produit2', price: 5, quantity: 0, like: 52, image: "" },
      { id: 3, title: 'produit3', price: 10, quantity: 20, like: 5, image: "" }
    ]
  }

  addProduct(p: any) {
    this.listproducts.push(p);
    console.log(this.listproducts.length);

  }

  getProducts(){return this.listproducts}
}



























