// controllers/blogController.js
import blogModel from '../models/blogModel.js'
import fs from 'fs'

const addBlog = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const blog = new blogModel({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
        image: image_filename,
        videoUrl: req.body.videoUrl || null
    })

    try {
        await blog.save();
        res.json({ success: true, message: "Blog Added" });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" });
    }
}

const listBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({}).sort({ date: -1 });
        res.json({ success: true, data: blogs });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" });
    }
}

const removeBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.body.id)
        fs.unlink(`uploads/${blog.image}`, () => { })

        await blogModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Blog Removed" })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

export { addBlog, listBlogs, removeBlog }
