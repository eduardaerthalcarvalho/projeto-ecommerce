import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';

@Component({
  imports: [],
  selector: 'app-product-three',
  styleUrl: './product-three.scss',
  templateUrl: './product-three.html',
})
export class ProductThree implements OnInit {
  private _productsService = inject(ProductsService)
  product:any = []
  ngOnInit(): void {
    this.product = this._productsService.getProductById(3)
  }
 
}