import { Component, inject, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products-service';

@Component({
  imports: [],
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
