import { Action } from '@ngrx/store';

export interface Action extends Action {
type: string;
payload?: any;
}