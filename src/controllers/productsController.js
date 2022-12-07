const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/productsData.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));



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
        res.render('productCreateForm');
    },

    	// Detalle de un producto//
	detail: (req, res) => {
		let product = products.find(element=>element.id == req.params.id)
		res.render('productDetail', {product});
	},

    store: (req, res) => {
        let newProduct = {
            'id': products[products.length - 1].id + 1,
            'name': req.body.name,
            'description': req.body.description,
            'image': 'default.png',
            'category': req.body.category,
            'color': req.body.color,
            'size': req.body.size,
            'price': '1200',
        };
/*         res.send(req.body); */
        products.push(newProduct);
        fs.writeFileSync(productsPath, JSON.stringify(products, null, ''));
        res.redirect('/');
    }
}

module.exports = productsController