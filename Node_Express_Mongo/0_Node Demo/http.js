const http = require('http');

const server = http.createServer((request , response) => {
    if(request.url === '/') {
        response.write("Hello Node!");
        response.end();
    }
});

server.listen(3000);
console.log("Listining on port 3000");