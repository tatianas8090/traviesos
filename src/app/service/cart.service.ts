import { Injectable } from '@angular/core';
import { products } from 'src/app/products/products.component';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  products=products;
  items: { id: string; title: string; price: number; description: string; img: string; amount: number; subtotal: number;  }[]=[];
  constructor() { }


  addToCart(product: { id: string; title: string; price: number; description: string; img: string; amount: number; subtotal: number }) {
    let found = false;

    this.items.forEach((element:any) => {
      if (element.id === product.id) {
        found = true;
        element.amount += 1;
        element.subtotal = element.price * element.amount;
      }
    });


    if(!found) {
      product.amount = 1;
      product.subtotal = product.price * product.amount;
      this.items['push'](product);
    }
  }

  removeFromCart(product: { id: string; amount: number; subtotal: number  }) {
    const index = this.items['findIndex']((item: { id: string; }) => item.id === product.id);
    if (index !== -1) {
      this.items[index].amount--;
      this.items[index].subtotal = this.items[index].amount * this.items[index].price;
      if (this.items[index].amount === 0) {
        this.items['splice'](index, 1);
      }
    }

  }

  totalPrice() {
  return this.items['reduce']((total: number, item: { price: number; amount: number; }) => total + item.price * item.amount, 0);
}


  CartList(){
    return this.items
  }

  reduceAmount(product: { id: string; amount: number }) {
    this.items.forEach((item: { id: string; amount: number; }) => {
      if (item.id === product.id) {
        item.amount--;
      }
    });
  }


}



