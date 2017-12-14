import {School} from './school' 
export interface SortedCategory {
    id: string,
    name: string,
    schools: School[],
  }
export interface Category {
    id: string,
    name: string,
    created_at: string,
    updated_at: string,
}