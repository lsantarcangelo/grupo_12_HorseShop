const path = require('path');
const {check} = require('express-validator');

const validations = [
    check('name').notEmpty().isLength({min: 5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('description').isLength({min: 20}).withMessage('La descripción deberá tener al menos 20 caracteres'),
    check('category').notEmpty().withMessage('Debe seleccionar una categoría'),
    check('color').notEmpty().withMessage('Debe seleccionar un color'),
    check('size').notEmpty().withMessage('Debe seleccionar un talle'),
    check('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`) 
            }
        }
        return true;
    })
];

module.exports = validations;