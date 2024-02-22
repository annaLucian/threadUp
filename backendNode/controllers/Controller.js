import TableModel from "../model/ModelDb.js";
import { uploadImage } from "../middelware/Upload.js";


export const getAllProducts = async(req, res) => {
    try {
       const product = await TableModel.findAll()
       res.json(product)
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const getProduct = async(req,res) => {
    try {
        const getProduct = await TableModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(getProduct[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const createProduct = async (req, res) => {
    try {
        // Primero, utiliza el middleware uploadImage para manejar la carga de la imagen
        uploadImage(req, res, async err => {
            if (err) {
                return res.status(400).json({ message: 'Error al cargar la imagen', error: err });
            }

            // Normaliza la ruta de la imagen utilizando barras normales en lugar de barras invertidas
            const img = req.file ? req.file.path.replace(/\\/g, '/') : '';

            // Si la imagen se cargó correctamente, procede a crear el producto
            try {
                const newProduct = await TableModel.create({                    
                    gender: req.body.gender,
                    productName: req.body.productName,
                    brand: req.body.brand,
                    type: req.body.type,
                    color: req.body.color,
                    size: req.body.size,
                    price: req.body.price,
                    image: img, // Utiliza la ruta normalizada de la imagen
                    availability: req.body.availability,                    
                    description: req.body.description
                });
                res.json({
                    message: "¡Registro creado correctamente!",
                    blog: newProduct
                });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        await TableModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"Producto actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        TableModel.destroy({
            where: { id:req.params.id}
        })
        res.json({
            "message":"Producto eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


