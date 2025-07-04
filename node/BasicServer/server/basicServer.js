const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("../client/index.html", (err, data) => {
            if (!err) {
                res.writeHead(200, { "content-type": "text/html" });
                res.end(data);
            } else {
                res.writeHead(500, { "content-type": "text/html" });
                res.end("Something went wrong!");
            }
        });
    } else if (req.url === "/styles.css") {
        fs.readFile("../client/styles.css", (err, data) => {
            if (!err) {
                res.writeHead(200, { "content-type": "text/css" });
                res.end(data);
            } else {
                res.writeHead(500, { "content-type": "text/html" });
                res.end("Something went wrong!");
            }
        });
    } else if (req.url === "/client.js") {
        fs.readFile("../client/client.js", (err, data) => {
            if (!err) {
                res.writeHead(200, { "content-type": "application/javascript" });
                res.end(data);
            } else {
                res.writeHead(500, { "content-type": "text/html" });
                res.end("Something went wrong!");
            }
        });
    } else if(req.url == "/products"){
        var data = [
            {id: 1, name: "JSNDSD", price: 5000},
            {id: 2, name: "dhsb", price: 4000},
            {id: 3, name: "fiusjfi", price: 6000}
        ]
        res.writeHead(200, {"content-type":"application/json"});
        res.end(JSON.stringify(data));
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1:3000");
});
