import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';

@Component({
  imports: [],
  selector: 'app-product-two',
  styleUrl: './product-two.scss',
  templateUrl: './product-two.html',
})
export class ProductTwo implements OnInit {
  private _productsService = inject(ProductsService)
  product:any = []
  ngOnInit(): void {
    this.product = this._productsService.getProductById(2)
  }
 
}
