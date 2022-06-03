import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/ProductType';
import { ShopService } from './shop.service';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  shopParams = new ShopParams();
  totalCount: number;
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High',value:'priceAsc'},
    {name: 'Price: High to Low',value:'priceDesc'}
  ];

  // Injecting shop service
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  // Method for getting products
  getProducts(){
      this.shopService.getProducts(this.shopParams).subscribe(response => {
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.count;
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
  onBrandSelected(brandId: number){
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  //Method for product type selection
  onTypeSelected(typeId: number){
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  /*  
  * Functionality name:- Product Sorting Functionality
  * Author: Harsh Mendapara 
  */

  // Method for product sorting
  onSortSelected(sort: string){
    this.shopParams.sort = sort;
    this.getProducts();
  }

  /*  
  * Functionality name:- Pagination Functionality
  * Author: Harsh Mendapara 
  */
 //Method for page change event
 onPageChanged(event: any){
   this.shopParams.pageNumber = event;
   this.getProducts();
 }
}
