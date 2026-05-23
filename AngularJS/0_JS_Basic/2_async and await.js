//symple async function it returns promise
function fetchTheData(someValue){
    return new Promise(function(resolve, reject){
        getData(someValue, function(error, result){
            if(error){
                reject(error);
            }
            else{
                resolve(resutl);
            }
        })
    });
}
async function getSomeAsyncData(value){
    const result = await fetchTheData(value);
    return result;
}

getSomeData("someValue")
.then(function(result){
    // Do something with the result
})
.catch(function (error){
    // Handle error
});