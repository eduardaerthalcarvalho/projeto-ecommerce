import { Routes } from '@angular/router';
import { Home } from '../app/components/home/home';
import { Products } from './components/products/products';
import { ProductOne } from './components/product-one/product-one';
import { ProductTwo } from './components/product-two/product-two';
import { ProductThree } from './components/product-three/product-three';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'products',
    component: Products,
    children: [
      { path: 'one', component: ProductOne },
      { path: 'two', component: ProductTwo },
      { path: 'three', component: ProductThree }
    ]
  },
  { path: 'contact', component: Contact},
  { path: '**', redirectTo: 'home' }
];