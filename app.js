document.addEventListener('DOMContentLoaded', function(){

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e){
        if(e.target.value.trim() == ''){
            enviarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return; //esto es para no tenes tantos else, si se cumple esta velidacion el bloque de codigo termina
        }
        limpiarAlerta(e.target.parentElement)
    }

    function enviarAlerta(mensaje, referencia){
        limpiarAlerta(referencia)
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('alerta');
        referencia.appendChild(error)
    }
    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }
    }
})