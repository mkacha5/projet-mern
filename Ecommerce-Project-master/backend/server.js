import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected to the database");
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = 4000;
app.listen(PORT, console.log(`Server running in development mode on ${PORT}`));
