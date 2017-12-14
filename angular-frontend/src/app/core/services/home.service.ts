import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
// import {AppState} from '../models/app-state';
// import * as fromRoot from '../reducers';

@Injectable()
export class HomeService {
  private API_PATH = 'http://localhost:3333/test' ;
  constructor(private http: Http) {}

    getCollection(): Observable<any> {
      return this.http.get(this.API_PATH)
        .map(res => res.json() || []);
    }
    // loadLocation() : Observable<any> {
    //   return this.store.select(fromRoot.get)
    // }

    // loadFromFirebase(){
    //   const url = 'https://sdg-track-3.firebaseio.com/heat-map-data.json';

    //   return this.http.get(url)
    //   .map(res => res.json() || []);
    // }
}
