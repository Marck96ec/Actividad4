window.addEventListener('DOMContentLoaded', function(event) {
    var form_register = document.querySelector('#form-register');
    form_register.addEventListener('submit', function(event){
        
        var canSubmit = true;  
        var input_name = document.querySelector('#input_name');

        if (input_name.value == "") {
            document.querySelector('#name_container .input-error').innerHTML = 'El nombre es obligatorio';
            canSubmit = false;
        } else {
            document.querySelector('#name_container .input-error').innerHTML = '';
        }

        var input_last_name = document.querySelector('#input_last_name');

        if (input_last_name.value == "") {
            document.querySelector('#last_name_container .input-error').innerHTML = 'El apellido es obligatorio';
            canSubmit = false;
        } else {
            document.querySelector('#last_name_container .input-error').innerHTML = '';
        }

        var input_user_name = document.querySelector('#input_user_name');

        if (input_user_name.value == "") {
            document.querySelector('#user_name_container .input-error').innerHTML = 'El usuario es obligatorio';
            canSubmit = false;
        } else {
            document.querySelector('#user_name_container .input-error').innerHTML = '';
        }

        var input_cedula = document.querySelector('#input_cedula');
        

        if (input_cedula.value == "") {
            document.querySelector('#cedula_container .input-error').innerHTML = 'Cédula es obligatorio';
            canSubmit = false;
            
        }else if (!parseInt(input_cedula.value) ) {
            document.querySelector('#cedula_container .input-error').innerHTML = 'Cédula requiere ser numerica';
            canSubmit = false;
            
        }else if (input_cedula.value.length < 10 ) {
            document.querySelector('#cedula_container .input-error').innerHTML = 'Cédula requiere mínimo 10 dígitos';
            canSubmit = false;
        } 
         else {
            document.querySelector('#cedula_container .input-error').innerHTML = '';
            console.log(typeof input_cedula.value);
        }

        

        if(!canSubmit){
            event.preventDefault();
        }

       
    })
});