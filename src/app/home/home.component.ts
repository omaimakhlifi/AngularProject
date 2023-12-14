import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = "welcome 4SAE5"
  @Output() notif = new EventEmitter()
  color = "";
  price: number = 5;
  listproducts: Product[] = [];
  constructor(private ps: ProductService,private consumer:ConsumerProductService) { }
  ngOnInit() {
    //this.listproducts = this.ps.getProducts(); 
    this.consumer.getProducts().subscribe(
      (data)=>this.listproducts=data
    )

  }
  

  incrementLike(i: number) {
    this.listproducts[i].like++;

  }

  sendDataToFather() {
    this.notif.emit('bonjour');
  }

}
