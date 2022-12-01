const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/productsData.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const productsController = {
    index: (req, res) => {
        res.render('./products/productList');
    },

    create: (req, res) => {
        res.render('productCreateForm');
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