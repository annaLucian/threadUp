import TableModel from "../model/ModelDb.js";


export const getAllBlogs = async(req, res) => {
    try {
       const blogs = await TableModel.findAll()
       res.json(blogs)
    } catch (error) {
        res.json( {message: error.message})
    }
}