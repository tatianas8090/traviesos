import { Component, OnInit } from '@angular/core';
import { products } from '../card/card';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any =products;


  constructor () { }


  ngOnInit(): void {

  }

}
