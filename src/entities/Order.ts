class Order {
  id!: Number;
  userId!: Number;
  userEmail!: String;
  userAddress!: String;
  total!: number;
  totalProducts!: Number;
  totalQuantity!: Number;
  products!: Array<any>;
  createdAt!: Date;
  deliveryDate!: Date;
  constructor(data: Order) {
    Object.assign(this, data);
  }
  static emptyInstance() {
    return new Order({});
  }
}
export default Order;
