var http=require('http')
var mysql=require("mysql")
var urldata=require("url")
var con=mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"root",
    "database":"nationwide"
})
var process=function(req,res){
    res.writeHead(200, {'content-type':'text/html'})
    if(req.url=="/"){
        res.write("<H2> Name </H2>")
        con.connect(function(abcd){
            if(urldata.pathname=='/'){
            con.query("SELECT * from RESULTS;",function(err,results,fields){
                results.forEach(function(item){
                    res.write("<A href='http://localhost:4001/results'> Results </A>")

                })
            })
        }
        })
        con.connect(function(abce){
            con.query("SELECT * from PERSONAL;",function(err,personal,fields){
                personal.forEach(function(item){
                    console.log(item.empno);
                    console.log(item.name);
                    console.log(item.address);

                })
            })
        })
        con.connect(function(abcf){
            con.query("SELECT * from ACCOUNTS;",function(err,accounts,fields){
                accounts.forEach(function(item){
                    console.log(item.empno);
                    console.log(item.issuedate);
                    console.log(item.salary);

                })
            })
        })
    }
    res.end()
}
var server=http.createServer(process)
server.listen(4001)