const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator'); 
const db = require('../../database/models');



const productsController = {
    //Listado de todos los productos//
    list: (req, res) => {
        db.Product.findAll()
            .then(function(products) {
                res.render('../src/views/products/productList', {products:products});
            })		
    },

    //Detalle de un producto//
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
            include: [{association: 'category'}, {association: 'color'}, {association: 'size'}]
        })
            .then(function(product) {
                res.render('../src/views/products/productDetail', {product});
            })
	},
    
    //Creacion de nuevo producto//
    create: (req, res) => {
        let findCategories = db.Category.findAll();
        let findColors = db.Color.findAll();
        let findSizes = db.Size.findAll();
        Promise.all([findCategories, findColors, findSizes])
            .then(function([categories, colors, sizes]) {
                return res.render('../src/views/products/productCreateForm', {
                    categories:categories,
                    colors:colors,
                    sizes:sizes
                });
            })
    },

    //Guardado de nuevo producto creado//
    store: (req, res) => {
        const validations = validationResult(req);
        if (validations.errors.length > 0) {
            let findCategories = db.Category.findAll();
            let findColors = db.Color.findAll();
            let findSizes = db.Size.findAll();
            Promise.all([findCategories, findColors, findSizes])
                .then(function([categories, colors, sizes]) {
                    return res.render('../src/views/products/productCreateForm', {
                        categories:categories,
                        colors:colors,
                        sizes:sizes,
                        errors: validations.mapped(),
                        oldData: req.body
                    })
                })
        } else {
            db.Product.create({
                'name': req.body.name,
                'description': req.body.description,
                'product_img': req.file.filename,
                'category_id': req.body.category,
                'color_id': req.body.color,
                'size_id': req.body.size,
                'stock': req.body.stock,
                'price': req.body.price,
                'is_active': 1
            });
            res.redirect('/products');
        }
    },

    edit: (req, res) => {
        let findProduct = db.Product.findByPk(req.params.id);
        let findCategories = db.Category.findAll();
        let findColors = db.Color.findAll();
        let findSizes = db.Size.findAll();
        Promise.all([findProduct, findCategories, findColors, findSizes])
            .then(function([product, categories, colors, sizes]) {
                res.render('../src/views/products/productEditForm', {
                    product:product,
                    categories:categories,
                    colors:colors,
                    sizes:sizes
                });
            })
    },

    /* edit: async (req, res) => {
        let findProduct = await db.Product.findByPk(req.params.id);
        let findCategories = await db.Category.findAll();
        let findColors = await db.Color.findAll();
        let findSizes = await db.Size.findAll();
        res.render('../src/views/products/productEditForm', {
                    product:product,
                    categories:categories,
                    colors:colors,
                    sizes:sizes
                });
    }, */


    update: async (req, res) => {
        let findProduct = await db.Product.findByPk(req.params.id);
        await db.Product.update({
            'name': req.body.name,
            'description': req.body.description,
            'product_img': req.file == undefined ? findProduct.product_img : req.file.filename,
            'category_id': req.body.category,
            'color_id': req.body.color,
            'size_id': req.body.size,
            'stock': req.body.stock,
            'price': req.body.price,
            'is_active': 1
        }, {
            where: {
                id: req.params.id
            }
        })
		res.redirect('/');
    },

    //Eliminar Producto
    destroy : (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
    res.redirect('/products')
    }
}

module.exports= productsController