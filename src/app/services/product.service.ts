import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public cartAddedSubject = new Subject<boolean>();
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any> {
    return this.http.get<any>(
      'https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts'
    );
  }

  addToCart(requestPayload: any): Observable<any> {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart',
      requestPayload
    );
  }

  getCartItemsByCustId(custId: number): Observable<any> {
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=" + custId);
  }
}
