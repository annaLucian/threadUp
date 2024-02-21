import TableModel from "../model/ModelDb.js";


export const getAllProducts = async(req, res) => {
    try {
       const product = await TableModel.findAll()
       res.json(product)
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const createProduct = async (req, res) => {
    try {       
                const newProduct = await TableModel.create({                    
                    genero: req.body.genero,
                    productName: req.body.productName,
                    
                });
                res.json({
                    message: "¡Registro creado correctamente!",
                    blog: newProduct
                });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
     
            
    }



    