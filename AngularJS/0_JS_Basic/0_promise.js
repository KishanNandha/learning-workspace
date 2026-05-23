
const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    resolve(1); // pending => resolved, fulfilled 
    reject(new Error('message')); // pending => rejected
  }, 2000);
});

p
  .then(result => console.log('Result', result))
  .catch(err => console.log('Error', err.message));

//creating already resolved promise 
var anyValue = '';
const p1 =  Promise.resolve(anyValue);
rp.then(result => console.log('Result', result))

//creating already rejected promise
const p2 = Promise.reject(new Error('test message')); // same as above\


//running parallel promises
const p3 = Promise.all([p1,p2]); // this will return another promise
//this promise will be resoolved when all promise will be resolved 
//if any promise is rejected this promise will be rejeted.
p3 .then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message));