import express from 'express'
import { addPrecision, listPrecision, removePrecision } from '../controllers/precisionControllers.js'
import multer from 'multer'

const precisionRouter = express.Router()

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

precisionRouter.post("/add", upload.single("image"), addPrecision)
precisionRouter.get("/list", listPrecision)
precisionRouter.post("/remove", removePrecision)



export default precisionRouter