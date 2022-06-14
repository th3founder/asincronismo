/* async */
const doSomethingAsync = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(() => {
                resolve('Do something async')
            },3000);
        }else{
            reject(new Error('Test de error'));
        }
    })
}

const doSomething = async () =>{
    const something = await doSomethingAsync();
    console.log(something)
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () =>{
    try{
        const something = await doSomethingAsync();
        console.log(something)
    }catch{
        console.log(error)
    }
}

console.log('Before');
anotherFunction();
console.log('After');
/* ////////////////////////////////////////////////// */
/* Sincronimos */
const doSomethingAsync1 = () => {
    return new Promise ((resolve, reject) => {
      (true)
        ? setTimeout(() => {
          resolve('Do Something Async')
        }, 3000)
        : reject(newError('Test Error'))
    })
  }
  
  const doSomething1 = async () => {
    const something1 = await doSomethingAsync1();
    console.log(something1);
  }
  
  (async () => {
    console.log('Before');
    await doSomething1();
    console.log('After');
  })()
  
  const anotherFunction1 = async () => {
    try {
      const something1 = await doSomethingAsync1();
      console.log(something1);
    } catch (error) {
      console.error(error);
    }
  }
  
  (async () => {
    console.log('Before 1');
    await anotherFunction1();
    console.log('After 1');
  })()