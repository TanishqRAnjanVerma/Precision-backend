// models/blogModel.js
import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    videoUrl: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const blogModel = mongoose.model("blog", blogSchema);
export default blogModel;