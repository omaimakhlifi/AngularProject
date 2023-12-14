import { Component, ViewChild } from '@angular/core';
import { Product } from '../core/model/product';
import { ShowOneProductComponent } from '../show-one-product/show-one-product.component';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  listproducts:Product[]=[
    {id:1,title:'Mobile 1',price:20,quantity:10,like:0,image:"../../assets/image/mobile.png"},
    {id:2,title:'Mobile 2',price:5,quantity:0,like:52,image:"../../assets/image/mobile.png"},
    {id:3,title:'Mobile 3',price:10,quantity:20,like:5,image:"../../assets/image/mobile.png"}
  ]
  afterRecieverData(t:Product){
    //alert(t)
    let index=this.listproducts.indexOf(t);
   this.listproducts[index].like++;
   
  }
  @ViewChild(ShowOneProductComponent) child:any
  afficheMessage(){
    this.child.showMsgChild();

  }


}
