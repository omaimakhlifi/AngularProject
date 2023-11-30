import { Component } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent {
  listproducts:Product[]=[
    {id:1,title:'TV 1',price:20,quantity:10,like:0,image:"../../assets/image/image.png"},
    {id:2,title:'TV 2',price:5,quantity:0,like:52,image:"../../assets/image/image.png"},
    {id:3,title:'TV 3',price:10,quantity:20,like:5,image:"../../assets/image/image.png"}
  ]

}
