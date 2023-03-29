
class Cart {
    id!: Number;
    userId!: Number;
    total!: Number;
    discountedTotal!: Number;
    totalProducts!: Number;
    totalQuantity!: Number;
    products!: Array<any>;
    // constructor(id: Number, name: string, brand: string, category: Guid) {
    //     this.id = id;
    //     this.name = name;
    //     this.brand = brand;
    //     this.category = category;
    // }
    constructor(data: Cart) {
        Object.assign(this, data);
    }
    static emptyInstance(){
        return new Cart({})
    }
}
export default Cart