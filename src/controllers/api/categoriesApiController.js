const db = require('../../../database/models');

const CategoriesApiController = {
    //Listado de todas los categorias//
    list: (req, res) => {
        db.Category.findAll()
            .then(function(categories) {
                res.json({
                    count: categories.length,
                    categories: categories
                });
            })
            .catch(e => console.log(e))		
    },

}

module.exports= CategoriesApiController