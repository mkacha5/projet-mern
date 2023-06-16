import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = model("User", userSchema);

export default User;
