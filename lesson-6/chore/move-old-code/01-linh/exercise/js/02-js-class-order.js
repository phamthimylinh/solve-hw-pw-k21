class Order {
  constructor(orderId, items) {
    this.orderId = orderId;
    this.items = items;
    this.totalAmount = this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    return this.items.reduce((total, item) => total + item.amount, 0);
  }

  addItem(item) {
    this.items.push(item);
    this.totalAmount = this.calculateTotalAmount();
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.amount * item.price * (1 - item.discount),
      0
    );
  }
}

const order = new Order(1, [
  { name: "Item 1", price: 100, amount: 1, discount: 0 },
  { name: "Item 2", price: 200, amount: 2, discount: 0.1 },
]);

order.addItem({ name: "Item 3", price: 300, amount: 3, discount: 0.2 });
console.log(order.calculateTotal());
