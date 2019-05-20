import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public product: any = {
    name: '',
    image: '',
    brand: '',
    price: 0,
    short_description: '',
    description: '',
    information: '',
    stock: 0
  }

  public edit: boolean = false;

  constructor(private toastr: ToastrService, private _productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) {}

  saveProduct() {
    this._productsService.saveProduct(this.product).subscribe(
      res => {
        console.log(res);
        this.showNotification(true);
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
        this.showNotification(false, err);
      }
    );
    console.log(this.product);
  }

  updateProduct() {
    this._productsService.updateProduct(this.product.sku, this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );

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
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this._productsService.getProduct(params.id).subscribe(
        res => {
          console.log(res);
          this.product = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

}
