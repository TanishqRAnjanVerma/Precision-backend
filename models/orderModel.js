import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, reuired: true },
    amount: { type: Number, reuired: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Product Processing" },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false }
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;