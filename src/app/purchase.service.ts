import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from './models/Purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getPurchases() {
    return this.http.get('/assets/purchases.json')
      .toPromise()
      .then(r => <Purchase[]>r);
  }
}
