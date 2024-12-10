// routes/blogRoute.js
import express from 'express'
import { addBlog, listBlogs, removeBlog } from '../controllers/blogController.js'
import multer from 'multer'

const blogRouter = express.Router()

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

blogRouter.post("/add", upload.single("image"), addBlog)
blogRouter.get("/list", listBlogs)
blogRouter.post("/remove", removeBlog)

export default blogRouter