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
                    brand: req.body.brand,
                    type: req.body.type,
                    color: req.body.color,
                    size: req.body.size,
                    price: req.body.price,
                    image: req.body.image,
                    availability: req.body.availability
                    
                });
                res.json({
                    message: "¡Registro creado correctamente!",
                    blog: newProduct
                });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
     
            
    }



    