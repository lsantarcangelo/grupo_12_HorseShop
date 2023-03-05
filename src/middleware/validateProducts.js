const path = require('path');
const {check} = require('express-validator');

const validations = [
    check('name')
        .notEmpty().withMessage('Debe ingresar el nombre del producto').bail()
        .isLength({min: 5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('description')
        .notEmpty().withMessage('Debe ingresar la descripción del producto').bail()
        .isLength({min: 20}).withMessage('La descripción deberá tener al menos 20 caracteres'),
    check('category').notEmpty().withMessage('Debe seleccionar una categoría'),
    check('color').notEmpty().withMessage('Debe seleccionar un color'),
    check('size').notEmpty().withMessage('Debe seleccionar un talle'),
    check('image').custom((value, {req}) => {
        let file = req.file;
        console.log(file);
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if(!file){
            throw new Error('Debe cargar una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = validations;