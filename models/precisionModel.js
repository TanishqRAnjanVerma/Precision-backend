import mongoose from "mongoose";

const precisionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc_1: { type: String, required: true },
    desc_2: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
})

const precisionModel = mongoose.models.precision || mongoose.model("Precision", precisionSchema)

export default precisionModel