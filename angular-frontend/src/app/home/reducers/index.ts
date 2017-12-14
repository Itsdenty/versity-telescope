import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCategory from './category';
import * as fromSchool from './school';
import * as fromCategoryCollection from './category-collection';
import * as fromSchoolCollection from './school-collection';
import * as fromRoot from '../../reducers';

export interface HomeState {
  category: fromCategory.State;
  school: fromSchool.State;
  schoolCollection: fromSchoolCollection.State;
  categoryCollection: fromCategoryCollection.State;
}

export interface State extends fromRoot.State {
  'home': HomeState;
}

export const reducers = {
  category: fromCategory.reducer,
  school: fromSchool.reducer,
  schoolCollection: fromSchoolCollection.reducer,
  categoryCollection: fromCategoryCollection.reducer,
};

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getHomeState = createFeatureSelector<HomeState>('home');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getCategoryEntitiesState = createSelector(
  getHomeState,
  state => state.category
);
export const getSchoolEntitiesState = createSelector(
  getHomeState,
  state => state.school
);

export const getSelectedCategoryId = createSelector(
  getCategoryEntitiesState,
  fromCategory.getSelectedId
);
export const getSelectedSchoolId = createSelector(
    getSchoolEntitiesState,
    fromSchool.getSelectedId
  );
/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reducers boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: getCategoryIds,
  selectEntities: getCategoryEntities,
  selectAll: getAllCategories,
  selectTotal: getTotalCategories,
} = fromCategory.adapter.getSelectors(getCategoryEntitiesState);
export const {
  selectIds: getSchoolIds,
  selectEntities: getSchoolEntities,
  selectAll: getAllSchools,
  selectTotal: getTotalSchools,
} = fromSchool.adapter.getSelectors(getSchoolEntitiesState);

export const getSelectedCategory = createSelector(
  getCategoryEntities,
  getSelectedCategoryId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);
export const getSelectedSchool = createSelector(
  getSchoolEntities,
  getSelectedSchoolId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
// export const getSearchState = createSelector(
//   getBooksState,
//   (state: BooksState) => state.search
// );

// export const getSearchBookIds = createSelector(
//   getSearchState,
//   fromSearch.getIds
// );
// export const getSearchQuery = createSelector(
//   getSearchState,
//   fromSearch.getQuery
// );
// export const getSearchLoading = createSelector(
//   getSearchState,
//   fromSearch.getLoading
// );
// export const getSearchError = createSelector(
//   getSearchState,
//   fromSearch.getError
// );

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
// export const getSearchResults = createSelector(
//   getBookEntities,
//   getSearchBookIds,
//   (books, searchIds) => {
//     return searchIds.map(id => books[id]);
//   }
// );

export const getCategoryCollectionState = createSelector(
  getHomeState,
  (state: HomeState) => state.categoryCollection
);
export const getSchoolCollectionState = createSelector(
  getHomeState,
  (state: HomeState) => state.schoolCollection
);

export const getSchoolCollectionLoaded = createSelector(
  getSchoolCollectionState,
  fromSchoolCollection.getLoaded
);
export const getCategoryCollectionLoaded = createSelector(
  getCategoryCollectionState,
  fromCategoryCollection.getLoaded
);
export const getSchoolCollectionLoading = createSelector(
  getSchoolCollectionState,
  fromSchoolCollection.getLoading
);
export const getCategoryCollectionLoading = createSelector(
  getCategoryCollectionState,
  fromCategoryCollection.getLoading
);
export const getSchoolCollectionIds = createSelector(
  getSchoolCollectionState,
  fromSchoolCollection.getIds
);
export const getCategoryCollectionIds = createSelector(
  getCategoryCollectionState,
  fromCategoryCollection.getIds
);
// export const getCollectionSchoolIds = createSelector(
//   getCollectionState,
//   fromCollection.getSchoolIds
// );

export const getCategoryCollection = createSelector(
  getCategoryEntities,
  getCategoryCollectionIds,
  (entities, ids ) => {
    return ids.map(id => entities[id]);
  }
);
export const getSchoolCollection = createSelector(
  getSchoolEntities,
  getCategoryCollectionIds,
  (entities, ids ) => {
    return ids.map(id => entities[id]);
  }
);

export const isSelectedCategoryInCollection = createSelector(
  getCategoryCollectionIds,
  getSelectedCategoryId,
  (ids, selected) => {
    return ids.indexOf(selected) > -1;
  }
);
export const isSelectedSchoolInCollection = createSelector(
  getSchoolCollectionIds,
  getSelectedSchoolId,
  (ids, selected) => {
    return ids.indexOf(selected) > -1;
  }
);
