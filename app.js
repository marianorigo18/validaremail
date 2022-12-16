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
            enviarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
        }else{
            console.log(e.target.value);
        }
    }

    function enviarAlerta(mensaje, referencia){

        const alerta = referencia.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('alerta');
        referencia.appendChild(error)
    }
})