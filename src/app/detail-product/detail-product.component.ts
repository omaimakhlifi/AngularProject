import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
id!:number;
listproducts: Product[] = [];
  constructor(private route:ActivatedRoute,private ps:ProductService){}

  ngOnInit(){
    this.listproducts=this.ps.getProducts()
    this.id=this.route.snapshot.params['id'];
  }

}
