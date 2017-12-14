import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromHome from './reducers';
import * as collection from './actions/category-collection';
import { Category } from './models/category';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
categories$: Observable<any>;
  constructor(private store: Store<fromHome.State>, private homeService: HomeService) {
    console.log(this.categories$);
   }
// loadCategory() {
// // Get all comments
//   this.homeService.loadCategory()
//     .subscribe(
//       categories => {
//         this.categories$ = categories;
//         console.log(this.categories$)
//         console.log('here');
//       }, //Bind to view
//       err => {
//         // Log errors if any
//         console.log(err);
//     });
//   } 
  ngOnInit() {
    this.store.dispatch(new collection.LoadCategory()); 
    // this.loadCategory();
    this.store.select(fromHome.getCategoryCollection)
    .subscribe((data: any) => {
        this.categories$ = data
        console.log(data);
    });
    console.log(this.categories$)
  }
}
