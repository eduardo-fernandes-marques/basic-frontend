"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var http_1 = require("http");
http_1.createServer(function (_, response) {
    fs_1.readFile("./index.html", function (error, html) {
        console.log('ola mundo');
        if (error) {
            throw error;
        }
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(html);
        response.end();
    });
}).listen(8080);
