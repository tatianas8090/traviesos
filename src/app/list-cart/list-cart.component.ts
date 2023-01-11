import { Component, OnInit } from '@angular/core';
import { CartService} from 'src/app/service/cart.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.scss']
})
export class ListCartComponent implements OnInit {

  items:{ id: string; title: string; price: number; description: string; img: string; amount: number; subtotal: number;  }[]=[];
  totalPrice: number = 0;
  wpService: any;
  constructor (public cart:CartService,) {}

  ngOnInit(): void {
    this.items = this.cart.CartList();
    this.totalPrice = this.cart.totalPrice();
  }


  deleteProduct(product: { price: number; amount: number; subtotal: number  }) {
    product.amount--;
    product.subtotal = product.price * product.amount;
    if (product.amount === 0) {
      this.items = this.items.filter((item) => item !== product);

      let message = '';
      this.items.forEach(item => {
        message += `- ${item.title} x${item.amount} = ${item.subtotal}\n`;
      });
      message += `Total: ${this.totalPrice}`;


      this.wpService.contact(message)}
   }

   sendWhatsapp() {
     let message = '';
     this.items.forEach(item => {
     message += `- ${item.title} x${item.amount} (${item.description}) = ${item.subtotal}\n`;
      });

       message += `Total: ${this.totalPrice}`;


       const url = this.wpService.contact(message);
       console.log(url);
       window.open(url, '_blank');
   }

   removeProduct(product: { id: string; }) {
     this.items = this.items.filter((item) => item.id !== product.id);
     this.totalPrice = this.cart.totalPrice();
   }
}
