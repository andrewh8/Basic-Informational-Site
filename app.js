const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer(function(req, res) {
    let path = './';

    switch(req.url) {
        case '/': 
            path += 'index.html';
            break;
        case '/about': 
            path += 'about.html';
            break;
        case '/contact-me':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Error: File Not Found');
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            res.end();
        }
    })
})

server.listen(port, function(err) {
    if (err) {
        console.log('Error');
    } else {
        console.log('The server is listening on port: ' + port);
    }
})