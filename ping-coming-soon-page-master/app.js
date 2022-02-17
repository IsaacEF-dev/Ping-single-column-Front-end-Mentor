const email = document.querySelector('#correo');
const msj = document.querySelector('.error');
const btn = document.querySelector('#btn');
const exprecion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

btn.addEventListener('click', validarCorreo);

function validarCorreo() {
    if (exprecion.test(email.value)) {
        msj.style.display = 'none';
        email.style.border = '1px solid hsl(223, 100%, 88%)';
    } else {
        msj.style.display = 'block';
        email.style.border = '1px solid hsl(354, 100%, 66%)';

    }

}