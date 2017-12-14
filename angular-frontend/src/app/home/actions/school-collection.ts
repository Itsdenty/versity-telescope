import { Action } from '../../models/custom-action';
import { Category } from '../models/category';
import { School } from '../models/school';

export const ADD_SCHOOL = '[SchoolCollection] Add School';
export const ADD_SCHOOL_SUCCESS = '[SchoolCollection] Add School Success';
export const ADD_SCHOOL_FAIL = '[SchoolCollection] Add School Fail';
export const REMOVE_SCHOOL = '[SchoolCollection] Remove School';
export const REMOVE_SCHOOL_SUCCESS = '[SchoolCollection] Remove School Success';
export const REMOVE_SCHOOL_FAIL = '[SchoolCollection] Remove School Fail';
export const LOAD_SCHOOL = '[SchoolCollection] Load School';
export const LOAD_SCHOOL_SUCCESS = '[SchoolCollection] Load School Success';
export const LOAD_SCHOOL_FAIL = '[SchoolCollection] Load School Fail';

/**
 * Add Book to Collection Actions
 */
export class AddSchool implements Action {
  readonly type = ADD_SCHOOL;

  constructor(public payload: School) {}
}

export class AddSchoolSuccess implements Action {
  readonly type = ADD_SCHOOL_SUCCESS;

  constructor(public payload: School) {}
}

export class AddSchoolFail implements Action {
  readonly type = ADD_SCHOOL_FAIL;

  constructor(public payload: School) {}
}

/**
 * Remove Book from Collection Actions
 */
export class RemoveSchool implements Action {
  readonly type = REMOVE_SCHOOL;

  constructor(public payload: School) {}
}

export class RemoveSchoolSuccess implements Action {
  readonly type = REMOVE_SCHOOL_SUCCESS;

  constructor(public payload: School) {}
}

export class RemoveSchoolFail implements Action {
  readonly type = REMOVE_SCHOOL_FAIL;

  constructor(public payload: School) {}
}

/**
 * Load Collection Actions
 */
export class LoadSchool implements Action {
  readonly type = LOAD_SCHOOL;
  constructor(public payload?: any) {}
}

export class LoadSchoolSuccess implements Action {
  readonly type = LOAD_SCHOOL_SUCCESS;

  constructor(public payload: School[]) {}
}

export class LoadSchoolFail implements Action {
  readonly type = LOAD_SCHOOL_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | AddSchool
  | AddSchoolSuccess
  | AddSchoolFail
  | RemoveSchool
  | RemoveSchoolSuccess
  | RemoveSchoolFail
  | LoadSchool
  | LoadSchoolSuccess
  | LoadSchoolFail;
