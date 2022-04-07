const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

const server = http.createServer(function(req, res) {
    const q = url.parse(req.url, true);
    const filename = '.' + q.pathname;

    fs.readFile(filename, function(err, data) {
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