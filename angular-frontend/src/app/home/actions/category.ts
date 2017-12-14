import { Action } from '../../models/custom-action';
import { Category } from '../models/category';

export const SEARCH = '[Category] Search';
export const LOAD = '[Category] Load';
export const SELECT = '[Category] Select';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: Category[]) {}
}

// export class SearchComplete implements Action {
//   readonly type = SEARCH_COMPLETE;

//   constructor(public payload: Category[]) {}
// }

// export class SearchError implements Action {
//   readonly type = SEARCH_ERROR;

//   constructor(public payload: string) {}
// }

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: any) {}
}
// export class LoadAll implements Action {
//   readonly type = LOAD_All;
// }

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = Search | Load | Select;
