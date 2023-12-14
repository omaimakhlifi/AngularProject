import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private Ps: ProductService, private route: Router) { }
  registerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    like: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
  })
  showF() {
    console.log(this.registerForm);
  }
  ajouter() {
    console.log(this.registerForm.value);

    this.Ps.addProduct(this.registerForm.value);
    this.route.navigateByUrl('/product')
  }


}
