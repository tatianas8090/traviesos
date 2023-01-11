import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'header',component:HeaderComponent},
  {path:'cart',component:ListCartComponent},
  {path:"",component:HeaderComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
