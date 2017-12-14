import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/startWith';

import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { HomeService } from '../../core/services/home.service';
import * as categoryActions from '../actions/category-collection';
import * as schoolActions from '../actions/school-collection';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class HomeEffects {

  @Effect()
  search$: Observable<Action> = this.categoryActions$
    .ofType(categoryActions.LOAD_CATEGORY)
    .map(toPayload)
    .switchMap(query => {

      return this.hm.getCollection()
    })
        .mergeMap((result) => {
            console.log(result);
            return [new categoryActions.LoadCategorySuccess(result.categories), new schoolActions.LoadSchoolSuccess(result.schools)];
            
        })
        .catch(() => {return of(new categoryActions.LoadCategoryFail([])), of(new schoolActions.LoadSchoolFail([]));
        }
    );

    constructor(private categoryActions$: Actions, private schoolActions$: Actions, private hm: HomeService) { }
}
