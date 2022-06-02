import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/ProductType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];

  // Injecting shop service
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  // Method for getting products
  getProducts(){
    this.shopService.getProducts().subscribe(response => {
      this.products = response.data;
    }, error =>{
      console.log(error);
    });

  }

  //Method for getting product brands
  getBrands(){
    this.shopService.getBrands().subscribe(response => {
      this.brands = response;
    }, error =>{
      console.log(error);
    });
  }

  //Method for getting product types
  getTypes(){
    this.shopService.getTypes().subscribe(response => {
      this.types = response;
    }, error =>{
      console.log(error);
    });
  }

}
