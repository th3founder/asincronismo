// Implementación de una API con XMLHttpRquest

// Instanciando el request.
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/* let API = 'https://rickandmortyapi.com/api/character/'
 */

const fetchData = (url_api) =>{

    return new Promise((resolve,reject)=>{
        //referencia al objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();
    /* 
    A nuestra referencia xhttp le pasamos un LLAMADO 'open'
    donde: parametro1 = el metodo, parametro2 = la url,
    parametro3 = verificación si es asincrono o no, valor por defecto true
    */
    xhttp.open('GET', url_api, true);
    //Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = ((event) =>{
        /*
        los estados que puede tener son:
        estado 0: inicializado
        estado 1: cargando
        estado 2: ya se cargó
        estado 3: ya hay información
        estado 4: solicitud completa
        PD: recuerda estas trabajando con una API externa osea un servidor por lo que
        depende del servidor cuanto demore en cada estado haces un pedido por datos
        (request) y solo es aplicar lógica.
        */
        if(xhttp.readyState === 4){
            
            //if terneario
            (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)):reject(new Error('Error'), url_api)
        }
    });
    //Envio de la solicitud.
    xhttp.send();
    })
}

module.exports = fetchData