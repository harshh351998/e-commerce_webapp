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
  brandIdSelected: number;
  typeIdSelected: number;

  // Injecting shop service
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  // Method for getting products
  getProducts(){
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected).subscribe(response => {
      this.products = response.data;
    }, error =>{
      console.log(error);
    });

  }

  //Method for getting product brands
  getBrands(){
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: 'All'}, ...response];
    }, error =>{
      console.log(error);
    });
  }

  //Method for getting product types
  getTypes(){
    this.shopService.getTypes().subscribe(response => {
      this.types = [{id: 0, name: 'All'}, ...response];
    }, error =>{
      console.log(error);
    });
  }

  /*  
  * Functionality name:- Product Filter Functionality
  * Author: Harsh Mendapara 
  */

  //Method for product brand selection
  onBrandSelection(brandId: number){
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  //Method for product type selection
  ontypeSelection(typeId: number){
    this.typeIdSelected = typeId;
    this.getProducts();
  }


}
