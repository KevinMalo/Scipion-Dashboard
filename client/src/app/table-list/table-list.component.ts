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

  deleteProduct(id: string) {
    console.log(id);
    this._productsService.deleteProduct(id).subscribe(
      res => {
        this.getProducts();
      },
      err => console.log(err)
    );
  }

  getProducts() {
    this._productsService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.getProducts();
  }

}
