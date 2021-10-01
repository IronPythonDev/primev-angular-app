import { HttpClient , HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from './models/Account';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  getResources(){
    return this.http.get('/assets/resources.json')
      .toPromise()
      .then(r => <Resource[]> r);
  }
}
