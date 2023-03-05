const db = require('../../../database/models');

const productsApiController = {
    //Listado de todos los productos//
    list: (req, res) => {
        db.Product.findAll()
            .then(function(products) {
                res.json({
                    count: products.length,
                    countByCategory: 
                    {
                        man: products.filter(element => element.category_id == 1).length,
                        woman: products.filter(element => element.category_id == 2).length,
                        kids: products.filter(element => element.category_id == 3).length,
                        accesories: products.filter(element => element.category_id == 4).length,
                    },
                    products: products
                });
            })
            .catch(e => console.log(e))		
    },

    //Detalle de un producto//
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
            include: [{association: 'category'}, {association: 'color'}, {association: 'size'}]
        })
            .then(function(product) {
                res.json({
                    product: product,
                    image_url: ''
                });
            })
	}
}

module.exports= productsApiController