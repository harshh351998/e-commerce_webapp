import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/ProductType';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7227/api/'

  constructor(private http: HttpClient) { }

  //Method for getting products
  getProducts(brandId?: number, typeId?: number){
    let params = new HttpParams();
    if (brandId){
      params = params.append('brandId',brandId.toString());
    }

    if (typeId){
      params = params.append('typeId',typeId.toString());
    }
    return this.http.get<IPagination>(this.baseUrl + 'products', {observe:'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
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
