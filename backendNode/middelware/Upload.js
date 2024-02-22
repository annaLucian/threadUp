import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// Configuración de Multer para almacenar las imágenes en el directorio 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname); 
        cb(null, `${Date.now()}${ext}`);
    }
});

// Función middleware para manejar la carga de imágenes
const upload = multer({ storage: storage });

export const uploadImage = (req, res, next) => {
    upload.single('image')(req, res, err => {
        if (err) {
            return res.status(400).json({ message: 'Error al cargar la imagen', error: err });
        }
        
        
        const resizedImagePath = req.file.path + '-resized'; 
        sharp(req.file.path)
            .resize({ width: 480 })
            .toFile(resizedImagePath, (err, info) => {
                if (err) {
                    return res.status(400).json({ message: 'Error al redimensionar la imagen', error: err });
                }
                
                // Reemplazar el archivo original con la imagen redimensionada
                fs.rename(resizedImagePath, req.file.path, err => {
                    if (err) {
                        return res.status(400).json({ message: 'Error al sobrescribir el archivo original', error: err });
                    }
                    next(); 
                });
            });
    });
};

