Promise.resolve({ id: 1, })
.then(result => console.log(result));

Promise.reject(new Error('reason for rejection...'))
.catch(result => console.log(result));