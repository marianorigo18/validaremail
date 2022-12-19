En este proyecto capturamos los elementos de DOM, le asignamos una listenes a cada uno de los inputs, por cada input validamos los datos de entrada:

validaciones de inputs: 
1. no espacion con trim();
2. cumplir con las condiciones del top level email domains
 
Envio de alertas sin uno de los campos esta vacio, en especial para el input de email hay una condicional que comprueba si el input es de email y aparte es incorrecto la estructura del email lanzara un error en especial "El email no es valido".

botones:

boton submit:

cuando los todos campos esten completados y con los datos correspondientes recien es cuando se habilitara el boton de envio de email.

button reset:

Una vez activado el button reset el botos de submit se desactivara y todos los campos se vaciaran.

Envio de Email:

Una vez enviado el email simulara un spinner, y luego un mensaje de que se envio con exito el email.
