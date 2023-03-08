import type { Guid } from 'guid-ts';
class Product {
    id!: Number;
    title!: string;
    price!: Number;
    description!: string;
    brand!: string;
    category!: Guid;
    thumbnail!: string;
    rating!: Number;
    images!: [];
    // constructor(id: Number, name: string, brand: string, category: Guid) {
    //     this.id = id;
    //     this.name = name;
    //     this.brand = brand;
    //     this.category = category;
    // }
    constructor(data: Product) {
        Object.assign(this, data);
    }
}
export default Product