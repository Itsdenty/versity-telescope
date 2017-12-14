import { Action } from '@ngrx/store';

export const REMOVE_ERROR = '[Layout] Remove Error';
export const SET_ERROR = '[Layout] Set Error Exist';
export const SET_SUCCESS = '[Layout] Set Success';
export const REMOVE_SUCCESS = '[Layout] Remove Success';

export class SetError implements Action {
  readonly type = SET_ERROR;
  constructor(public payload?: string) {}
}
export class SetSuccess implements Action {
  readonly type = SET_SUCCESS;
  constructor(public payload?: string) {}
}

export class RemoveError implements Action {
  readonly type = REMOVE_ERROR;
  constructor(public payload?: string) {}
}
export class RemoveSuccess implements Action {
  readonly type = REMOVE_SUCCESS;
  constructor(public payload?: string) {}
}

export type Actions = SetError | RemoveError | SetSuccess | RemoveSuccess;
