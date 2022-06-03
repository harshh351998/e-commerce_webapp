import { ShopParams } from '../shared/models/shopParams';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/ProductType';
import { map } from 'rxjs/operators'
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7227/api/'

  constructor(private http: HttpClient) { }

  //Method for getting products
  getProducts(shopParams: ShopParams){
    let params = new HttpParams();

    
    if (shopParams.brandId !== 0){
      params = params.append('brandId',shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0){
      params = params.append('typeId',shopParams.typeId.toString());
    }

    if(shopParams.search){
      params = params.append('search',shopParams.search);

    }

    params = params.append('sort',shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    
    return this.http.get<IPagination>(this.baseUrl + 'products', {observe:'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  //Method for getting single product
  getProduct(id: number) {
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  //Method for getting product brands
  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  //Method for getting product types
  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
