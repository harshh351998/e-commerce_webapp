import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7227/api/'

  constructor(private http: HttpClient) { }

  //Method for getting products
  getProducts(){
    return this.http.get<IPagination>(this.baseUrl + 'products');
  }
}
