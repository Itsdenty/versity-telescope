import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { Category } from './models/category'
// import {AppState} from '../models/app-state';
import * as fromRoot from './reducers';

@Injectable()
export class HomeService {
  constructor(private http: Http, private store: Store<fromRoot.State>) {}
    loadCategory() : Observable<any> {
      return this.store.select(fromRoot.getCategoryCollection)
    }

    loadFromFirebase(){
      const url = 'https://sdg-track-3.firebaseio.com/heat-map-data.json';

      return this.http.get(url)
      .map(res => res.json() || []);
    }
}
