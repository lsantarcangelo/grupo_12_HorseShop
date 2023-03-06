window.addEventListener('load', function() {
    const productsForm = document.querySelector('form.productsForm');
    productsForm.addEventListener('submit', validateForm);
})
    
    function validateForm(event) {
        const inputName = document.querySelector('#name');
        const inputDescription = document.querySelector('#description');
        const divErrors = document.querySelector("div.product-errors ul");
        let errors = [];
        let isValid = true;

        if (inputName.value == "") {
            errors.push("Debe ingresar el nombre del producto");
            isValid = false;
        } else if (inputName.value.length < 5) {
            errors.push("El nombre debe tener al menos 5 caracteres");
            isValid = false;
        }

        if (inputDescription.value == "") {
            errors.push("Debe ingresar la descripción del producto");
            isValid = false;
        } else if (inputDescription.value.length < 20) {
            errors.push("La descripción deberá tener al menos 20 caracteres");
            isValid = false;
        }
        
        if (!isValid) {
            divErrors.innerHTML = "";
            for (i=0; i < errors.length; i++) {
            divErrors.innerHTML += "<li>" + errors[i] + "</li>"
            }
            event.preventDefault();
        } else {
            divErrors.innerHTML = "";            
            this.submit();
        }
    }