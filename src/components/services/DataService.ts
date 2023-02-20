import Brand from '../entities/Brand'
import Category from '../entities/Category'
export const DataService = {
    getCategories(): Array<Category> {
        const arr = [];
        for (let index = 0; index < 6; index++) {
            const element =new Category('cid' + index, 'Category' + index)
            arr.push(element);
        }
        return arr;
    },
    getBrands(): Array<Brand> {
        const arr = [];
        for (let index = 0; index < 6; index++) {
            const element =new Brand('cib' + index, 'Brand' + index)
            arr.push(element);
        }
        return arr;
    }
}