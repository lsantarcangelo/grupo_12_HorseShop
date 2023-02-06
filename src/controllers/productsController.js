const fs = require('fs');
const path = require('path');
const db = require('../database/models');



const productsController = {
    //Listado de todos los productos//
    list: (req, res) => {
        db.Product.findAll()
            .then(function(products) {
                res.render('./products/productList', {products:products});
            })		
    },

    //Detalle de un producto//
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
            include: [{association: 'category'}, {association: 'color'}, {association: 'size'}]
        })
            .then(function(product) {
                res.render('./products/productDetail', {product});
            })
	},
    
    //Creacion de nuevo producto//
    create: (req, res) => {
        let findCategories = db.Category.findAll();
        let findColors = db.Color.findAll();
        let findSizes = db.Size.findAll();
        Promise.all([findCategories, findColors, findSizes])
            .then(function([categories, colors, sizes]) {
                return res.render('./products/productCreateForm', {
                    categories:categories,
                    colors:colors,
                    sizes:sizes
                });
            })
    },

    //Guardado de nuevo producto creado//
    store: (req, res) => {
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
        })
        res.redirect('/products');
    },

    edit: (req, res) => {
        let findProduct = db.Product.findByPk(req.params.id);
        let findCategories = db.Category.findAll();
        let findColors = db.Color.findAll();
        let findSizes = db.Size.findAll();
        Promise.all([findProduct, findCategories, findColors, findSizes])
            .then(function([product, categories, colors, sizes]) {
                res.render('./products/productEditForm', {
                    product:product,
                    categories:categories,
                    colors:colors,
                    sizes:sizes
                });
            })
    },

    update: (req, res) => {
        db.Product.update({
            'name': req.body.name,
            'description': req.body.description,
            'product_img': req.file.filename,
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