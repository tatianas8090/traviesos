import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private _cartService: CartService) {}

  itemCount(){
    return this._cartService.itemsCount();
  }

}
