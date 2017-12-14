import { School } from './school'
import { Category } from './category'
export interface HomeCategory {
    id: string,
    categories: Category[],
    schools: School[];
}