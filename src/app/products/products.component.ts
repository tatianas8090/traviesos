import { Component,OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from 'src/app/service/cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products= products;
  allproducts = products;

  selectedCategory: string = '';

  constructor(private cart:CartService) {

   }

  ngOnInit(): void {}

  addToCart(product: { id: string; title: string; price: number; description: string; img: string; amount: number; subtotal: number;   }) {
    this.cart.addToCart(product);
    window.alert('Producto agregado' + product.title + product.id)
    console.log(products);
  }

  filterProducts () {
    if(this.selectedCategory === '' ) {
      this.products = this.allproducts;
    } else {
      this.products = this.allproducts.filter((product: any) => product.category === this.selectedCategory);
    }
   }
}


export { products };
