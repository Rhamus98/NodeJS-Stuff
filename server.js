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
        fs.readFile("./index.html", function(error, data){
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
}
server=http.createServer(indexRequest)
server.listen(8000) 