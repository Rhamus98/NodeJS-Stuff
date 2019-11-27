var express=require("express")
var cors=require("cors")
var app=express()
var bodyparser=require("body-parser")
var mongo=require('mongodb').MongoClient

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

let url="mongodb://localhost:27017"

app.get("/showAll",function(req,res){
    mongo.connect(url, function (err, client) {
      if (err) throw err
      var db = client.db('shafeeqdb')
      db.collection("personal").find().toArray(function(err, result) {
        if (err) throw err
        res.send(result)
      })
      })
    })

app.post("/post-data", function(req, res){
    console.log("Hello")
    let data={
        regno:req.body.regno,
        name:req.body.name,
        marks:req.body.marks,
        emails:req.body.emails
    }
    mongo.connect(url, function(err,client){
        if(err){
            console.log(err)
        }
        else{
            database=client.db("shafeeqdb")
            database.collection("personal").insertOne(data, function( error, result){
                if(error){
                    console.log(error)
                }
                else{
                    console.log(result)                }
            })
        }
    })
    res.end()
})
app.listen(2000)

