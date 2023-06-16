import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  image: String,
  description: String,
  brand: String,
  category: String,
  price: Number,
  countInStock: Number,
  rating: Number,
  numReviews: Number,
});

const Product = model("Product", productSchema);
export default Product;
