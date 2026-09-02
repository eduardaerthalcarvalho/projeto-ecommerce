import { Component, inject, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ RouterLink ],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  private _productsService = inject(ProductsService);
  productsList: IProduct[] = [];

  ngOnInit(): void {
    this.productsList = this._productsService.getProducts();
  }


}
