const mujer = products.filter(function(product){
	return product.category == 'Mujer'
})


const mainController={
    index : (req, res) => {
        res.render('index');
    },

   /*mujer : (req, res) => {
        res.render('mujer');
    },*/

    mujer: (req, res) => {
		res.render('mujer', {mujer, hombre, niños, accesorios});
}

module.exports = mainController