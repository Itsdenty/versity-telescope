import { Action } from '../../models/custom-action';
import { Category } from '../models/category';
import { HomeCategory } from '../models/home-category';

export const ADD_CATEGORY = '[CategoryCollection] Add Book';
export const ADD_CATEGORY_SUCCESS = '[CategoryCollection] Add Book Success';
export const ADD_CATEGORY_FAIL = '[CategoryCollection] Add Book Fail';
export const REMOVE_CATEGORY = '[CategoryCollection] Remove Book';
export const REMOVE_CATEGORY_SUCCESS = '[CategoryCollection] Remove Book Success';
export const REMOVE_CATEGORY_FAIL = '[CategoryCollection] Remove Book Fail';
export const LOAD_CATEGORY = '[CategoryCollection] Load Category';
export const LOAD_CATEGORY_SUCCESS = '[CategoryCollection] Load Success';
export const LOAD_CATEGORY_FAIL = '[CategoryCollection] Load Fail';

/**
 * Add Book to Collection Actions
 */
export class AddCategory implements Action {
  readonly type = ADD_CATEGORY;

  constructor(public payload: Category) {}
}

export class AddCategorySuccess implements Action {
  readonly type = ADD_CATEGORY_SUCCESS;

  constructor(public payload: Category) {}
}

export class AddCategoryFail implements Action {
  readonly type = ADD_CATEGORY_FAIL;

  constructor(public payload: Category) {}
}

/**
 * Remove Book from Collection Actions
 */
export class RemoveCategory implements Action {
  readonly type = REMOVE_CATEGORY;

  constructor(public payload: Category) {}
}

export class RemoveCategorySuccess implements Action {
  readonly type = REMOVE_CATEGORY_SUCCESS;

  constructor(public payload: Category) {}
}

export class RemoveCategoryFail implements Action {
  readonly type = REMOVE_CATEGORY_FAIL;

  constructor(public payload: Category) {}
}

/**
 * Load Category Collection Actions
 */
export class LoadCategory implements Action {
  readonly type = LOAD_CATEGORY;
  constructor(public payload?: any) {}
}

export class LoadCategorySuccess implements Action {
  readonly type = LOAD_CATEGORY_SUCCESS;

  constructor(public payload: Category[]) { console.log('category action reached'); }
}

export class LoadCategoryFail implements Action {
  readonly type = LOAD_CATEGORY_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | AddCategory
  | AddCategorySuccess
  | AddCategoryFail
  | RemoveCategory
  | RemoveCategorySuccess
  | RemoveCategoryFail
  | LoadCategory
  | LoadCategorySuccess
  | LoadCategoryFail;
