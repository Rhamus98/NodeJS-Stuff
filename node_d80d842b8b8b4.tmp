var http=require("http")
var URL=require("url")
var fs=require("fs")
var querystring=require("querystring")
var MYSQL=require('./dbConnection')
var con=MYSQL()
var showRec=require("./showRecords.js")

function indexRequest(req,res){
    var lookingfor=URL.parse(req.url).pathname
    if(lookingfor=="/"){
        fs.readFile("./index1.html", function(error, data){
            if(!(error)){
                res.write(data)
                res.end()
            }
        })
    }
    if(lookingfor=="/showallrecords"){
        showRecords(req,res)
    }
    if(lookingfor=="/dataform"){
        fs.readFile('./dataform.html',function(error,data){
            if(!(error)){
                res.write(data)
                res.end()
            }
        })

    }
    if(lookingfor=="/insertRecord"){
        var data=""
        var record=""
        req.on("data", function(chunk){
            data+=chunk
        })
        req.on("end", function(){
            record=querystring.parse(data)
            console.log(data)
            console.log(record)
            var sql=`insert into personal values(${record.empno}, '${record.name}', '${record.address}')`
            con.query(sql, function(error,results){
                if(error){
                    console.log("Error:"+error)
                }
                else{
                    console.log(results)
                }
            })
        })
    }
    if(lookingfor=="/show"){
        fs.readFile('./show.html',function(error,data){
            if(!(error)){
                res.write(data)
                res.end()
            }
        })
    }
    if(lookingfor=='/showAll'){
        var showsql = `select * from personal`
        show(showsql, con, res)
        }
    if(lookingfor=='/showcityrecords'){
        var data=""
        req.on("data", function(chunk){
            data+=chunk;
        })
        req.on("end", function(){
            var city=querystring.parse(data).city;
            var query=` select * from personal where address='${city}'`;
            show(query, con, res)
        })
    }
}
function show(showsql, con, res){
    con.query(showsql, function(error, personal){
        if(error){
            console.log("Error:"+error)
        }
        else{
            res.write("<a href= '/'> Home</a>")
            personal.forEach(function(item){
                res.write("<br>")
                res.write("<h3> Employee Number:"+item.empno + ", Name:" + item.name + ", Address:" + item.address + "</h3>")
                res.write("<br>")
            })
        }
    })
}

server=http.createServer(indexRequest)
server.listen(8000) 