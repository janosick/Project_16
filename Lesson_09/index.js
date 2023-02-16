var http = require('http');
var url = require('url');
var fs = require('fs');

var server = new http.Server;

server.listen(80, '127.0.0.1'); // localhost

server.on('request', function (req, res) {
    var parsedUrl = url.parse(req.url, true);

    fs.readFile(getPageNameByPath(parsedUrl.pathname) + '.html', function (err, data) {
        if (err) throw new Error(err);

        res.end(data);
    })

});



function getPageNameByPath(path) {
    switch (path) {
        case '/':
        case '/home':
            return 'index';
        case '/about':
            return 'about';
        default: return 'error';
    }
}