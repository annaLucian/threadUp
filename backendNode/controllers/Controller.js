import TableModel from "../model/ModelDb.js";


export const getAllBlogs = async(req, res) => {
    try {
       const product = await TableModel.findAll()
       res.json(product)
    } catch (error) {
        res.json( {message: error.message})
    }
}