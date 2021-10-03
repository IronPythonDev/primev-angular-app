import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sales } from './models/Sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getSales(){
    return this.http.get('/assets/sales.json')
      .toPromise()
      .then(r => <Sales[]> r);
  }
}
