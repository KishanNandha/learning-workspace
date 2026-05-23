const fs = require('fs');
//sync call
/* let files;
files =fs.readdirSync('./');
console.log("sync call "+files); */

fs.readdir('./',(err,files) => {
    if(err) console.log(err)
    else console.log(files);
})
