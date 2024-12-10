import precisionModel from '../models/precisionModel.js'
import fs from 'fs'

// Add Product Item

const addPrecision = async (req, res) => {

    let image_filename = `${req.file.filename}`

    const precision = new precisionModel({
        name: req.body.name,
        desc_1: req.body.desc_1,
        desc_2: req.body.desc_2,
        price: req.body.price,
        category: req.body.category,
        image: image_filename

    })

    try {
        await precision.save();
        res.json({ success: true, message: "Product Added" });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" });
    }
}

// All Precision List

const listPrecision = async (req, res) => {
    try {
        const precisions = await precisionModel.find({});
        res.json({ success: true, data: precisions });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" });
    }
}

// Remove Product Item

const removePrecision = async (req, res) => {
    try {
        const precision = await precisionModel.findById(req.body.id)
        fs.unlink(`uploads/${precision.image}`, () => { })

        await precisionModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Product Removed" })

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}
export { addPrecision, listPrecision, removePrecision }