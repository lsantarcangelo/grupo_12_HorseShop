window.addEventListener('load', function() {
    let body = document.querySelector('body');

    let productsForm = document.querySelector('.productsForm');
    productsForm.addEventListener('submit', function(event) {

        let errors = [];
        
        let nameInput = document.querySelector('#name');
        if(nameInput.value == '') {
            errors.push('Debe completar el nombre del producto');
        } else if (nameInput.value.length < 5) {
            errors.push('El nombre debe tener al menos 5 caracteres');
        }

        let descriptionInput = document.querySelector('#description');
        if(descriptionInput.value != '' && descriptionInput.value.length < 20) {
            errors.push('La descripcion debe tener al menos 20 caracteres');
        }

        if (errors.length > 0) {
            event.preventDefault();
            let ulErrors = document.querySelector('div.product-errors ul');

            for (let i = 0; i < errors.length; i++) {                
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>'                
            }
        }
    })
})