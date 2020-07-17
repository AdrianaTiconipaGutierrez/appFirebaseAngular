import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/products/product/product.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  { path: 'product/:id', component:ProductComponent },
  { path: 'products', component: ListProductsComponent },
  { path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
