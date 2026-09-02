import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';

@Component({
  imports: [],
  selector: 'app-product-four',
  styleUrl: './product-four.scss',
  templateUrl: './product-four.html',
})
export class ProductFour implements OnInit {
  private _productsService = inject(ProductsService)
  product:any = []
  ngOnInit(): void {
    this.product = this._productsService.getProductById(4)
  }
 
}