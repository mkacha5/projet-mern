import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  taxPrice: Number,
  shippingPrice: Number,
  totalPrice: Number,
  isPaid: Boolean,
  isDelivered: Boolean,
  deliveredAt: [Date],
  orderItems: [
    {
      name: String,
      image: String,
      description: String,
      brand: String,
      category: String,
      price: Number,
      countInStock: Number,
      rating: Number,
      numReviews: Number,
    },
  ],
  paymentResult: [
    {
      id: String,
      status: String,
      update_time: Date,
      email_address: String,
    },
  ],
});

const Order = model("Order", orderSchema);

export default Order;
