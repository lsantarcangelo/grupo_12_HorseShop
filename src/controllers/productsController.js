const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/productsData.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const db = require('../../database/models');



const man = products.filter(function(product){
	return product.category == 'man'
})

const woman = products.filter(function(product){
	return product.category == 'woman'
})

const kids = products.filter(function(product){
	return product.category == 'kids'
})

const accesories = products.filter(function(product){
	return product.category == 'accesories'
})



const productsController = {

    list: (req, res) => {
		res.render('./products/productList', {man, woman, kids, accesories});

    },
    
    create: (req, res) => {
        db.Category.findAll()
            .then(function(categories) {
                return res.render('./products/productCreateForm', {categories:categories});
            })
    },

    	// Detalle de un producto//
	detail: (req, res) => {
		let product = products.find(element=>element.id == req.params.id)
		res.render('./products/productDetail', {product});
	},

    store: (req, res) => {
        let newProduct = {
            'id': products[products.length - 1].id + 1,
            'name': req.body.name,
            'description': req.body.description,
            'image': req.file.filename,
            'category': req.body.category,
            'color': req.body.color,
            'size': req.body.size,
            'price': '1200',
        };
        products.push(newProduct);
        fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
        res.redirect('/products');
    },

    edit: (req, res) => {
        let product = products.find(element => element.id == req.params.id);
        res.render('./products/productEditForm', {product});
    },

    update: (req, res) => {
        let productToUpdate = {
            'id': req.params.id,
            'name': req.body.name,
            'description': req.body.description,
            'image': req.file.filename,
            'category': req.body.category,
            'color': req.body.color,
            'size': req.body.size,
            'price': '1200',
        };

        let productUpdated = products.map(element => {
            if (element.id == productToUpdate.id) {
                return element = productToUpdate;
            } else {
                return element;
            }
        });

        fs.writeFileSync(productsPath, JSON.stringify(productUpdated, null, ' '));
		res.redirect('/');
    },

    //Eliminar Producto
    destroy : (req, res) => {
    let productId = req.params.id;

    let productDelete=products.filter(product=>product.id != productId)

    fs.writeFileSync(productsPath, JSON.stringify(productDelete, null,'\t'));

    res.redirect('/products')
}
}

module.exports= productsController