//Crear funcion 
const someThingsWillHappen = () =>{
    //retornar una promesa con dos argumentos (resolve=si se ejecuta, reject=si se rechaza)
    return new Promise((resolve, reject)=>{
        //si es verdadero, vamos a devolver hey
        if(true){
            resolve(`Hey!`);
            //si no entonces devolvemos wooops
        }else{
            reject(`mmmmmm :( .)`);
        }
    })
}
//ejecutamos la funcion
someThingsWillHappen()
.then(response => console.log(response))    //si estamos obteniendo un resolve
.catch(e => console.log(e));     //si obtenemos un reject


const someThingsWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve(`Hola que tal`)
            }, 2000);
        }else{
            const error = new Error(`Chale ;( `)
            reject(error)
        }
    })
}

someThingsWillHappen2().then(response => console.log(response)).catch(e => console.log(e));


Promise.all([someThingsWillHappen(),someThingsWillHappen2()]).then(response => console.log(response)).catch(e => console.log(e));

/* Las promesas puden suceder:

Ahora
En el futuro
Nunca


*/