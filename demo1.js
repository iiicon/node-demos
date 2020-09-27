const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    console.log(query);

    res.writeHead(200, { "Content-Type": "text/html;charset:'utf-8'" });

    res.write("周周周");

    res.write("<head><meta charset='UTF-8'></head>");

    res.end();
  })
  .listen(8888);

console.log("Server running at http://127.0.0.1:8888/");
