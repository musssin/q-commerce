import Brand from '../entities/Brand'
import Category from '../entities/Category'
import { Guid } from 'guid-ts';
export const DataService = {
    getCategories(): Array<Category> {
        const arr = [];
        for (let index = 0; index < 6; index++) {
            const element =new Category(Guid.newGuid(), 'Category' + index)
            arr.push(element);
        }
        return arr;
    },
    getBrands(): Array<Brand> {
        const arr = [];
        for (let index = 0; index < 6; index++) {
            const element =new Brand(Guid.newGuid(), 'Brand' + index)
            arr.push(element);
        }
        return arr;
    }
}