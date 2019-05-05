import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public products: any = [];

  constructor( private _productsService: ProductsService ) { }

  ngOnInit() {

    this._productsService.getProducts().subscribe(
      res => {
        this.products = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
