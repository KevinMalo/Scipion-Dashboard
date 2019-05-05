import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public product: Product = {
    name: '',
    image: '',
    brand: '',
    price: 0,
    short_description: '',
    description: '',
    information: '',
    stock: 0
  }

  constructor(private toastr: ToastrService, private _productsService: ProductsService) {}

  saveProduct() {
    this._productsService.saveProduct(this.product).subscribe(
      res => {
        console.log(res);
        this.showNotification(true);
      },
      err => {
        console.log(err);
        this.showNotification(false, err);
      }
    );
    console.log(this.product);
  }

  showNotification(res, err?){

        if(res == true) {
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Producto guardado con Exito!', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-success alert-with-icon",
           positionClass: 'toast-top-center'
         });
        }
        if(res == false) {
        this.toastr.error(`<span class="now-ui-icons ui-1_bell-53"></span> Error: ${err}`, '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-danger alert-with-icon",
           positionClass: 'toast-top-center'
         });
        }
  }


  ngOnInit() {
  }

}
