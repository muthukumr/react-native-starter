class Order {
  constructor(
    id,
    code,
    name,
    type,
    rate,
    quantity,
    amount,
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.type = type;
    this.rate = rate;
    this.quantity = quantity;
    this.amount = this.quantity * this.rate;
  }
}

export default Order;
