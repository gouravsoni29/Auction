import { Injectable } from '@angular/core';
//import { product } from './product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id?:number;

  constructor(private http : HttpClient) {
    
  }

  addTask(task : Product) : Observable<Product> {
    return this.http.post<Product>(`${baseUrl}/product/vi/addproduct`,task);
  }

  getAllTask() : Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/product/vi/allproducts`);
  }

  deleteEmpById(id?:number):Observable<Object>{
    return this.http.delete<Object>(`${baseUrl}/product/vi/products/${id}`); 
  }

  editTask(task : Product) : Observable<Product> {
    return this.http.put<Product>(`${baseUrl}`+'/'+task.id,task);
  }
}
