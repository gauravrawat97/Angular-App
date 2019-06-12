import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    

    constructor(private http: HttpClient) { }

  getBeers() {
    return this.http.get('https://api.punkapi.com/v2/beers')
  }

  getselectedBeers(url) {
    return this.http.get(url)
  }
}
