var http = require("http");
var mysql = require("mysql");
var myurl = require("url");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nationwide"
});
var DBGet = function(req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  var urldata=myurl.parse(req.url, true);
  if (req.url == "/") {
    con.connect(function(abcd) {
      con.query("SELECT * FROM results;", function(err, results, fields) {
        results.forEach(function(item) {
            res.write('<h2>'+item.name+'</h2>')
            res.write("  -  ");
            res.write('<a href="http://localhost:4001/personal?'+item.empno+'">' +(item.name)+' </a>')
            res.write("<Br>")
        })
      })
    })
    res.end()
  }
}

var server = http.createServer(process);
server.listen(4001);

