import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TVComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'home', component:TestComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'product', component:HomeComponent},
  {path:'forms', component:ReactiveFormComponent},
  {path:'product/:id', component:DetailProductComponent},
  {path:'residence', component:ResidencesComponent},
  {path:'showApparts/:id', component:ApartmentComponent},
  {path:'tv',component:TVComponent},
  {path:'mobile',component:MobileComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
