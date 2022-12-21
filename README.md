Call Stack 

javascript es un lenguaje de programacion monoproceso.

monoprocess: ejecuta una cosa a la vez = un solo callStack basado en (LIFO)

callStack: Es una estructura de datos que registra en que 
en que momento se encuentra la ejecucion del programa.

=> guarda los scope/contexto de ejecucion.

phase de creacion:
    windows = global objet,
    this = windows,
    se guardan las varibles 
    y funciones en la memoria de la computadora
    y el motor de javascript les otorga un valor undefined.

phase execution:
    las variables dejan de ser undefined, hasta que llega a la 
    correspondiente linea y se le asigna el valor que le dimos
    a la variable.

function:
    cuando encuentra una funcion se crea un nuevo contexto de ejecucion
    con un objeto argument.

argunments:
    contiene los parametros que recibe la funcion cuando fue invocada.

return:
    si el motor de javascript encuentra un return en una funcion lo sacara
    de la pila.

anonymus:
    es una funcion anonima inicializadora que engloba todo el programa .

this:
    Es el objeto dueño de la funcion y el valor que contiene this determina
    lo que se llama "contexto de la funcion"

contexto de ejecucion:
    El conjunto de variables  que tiene acceso la funcion, el contexto this,
    arguments, u objeto global/windows.

    cada vez que se invoca una funcion se crea un contexto de ejecucion para
    esa funcion y se lo agrega a la pila.

    Event Loop:

