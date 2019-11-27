// class data{
//     constructor(){
//         this.something={
//             "regno":"24",
//             "name":"Shafeeq"
//         }
//     }
//     adding(Key1,Value1){
//         this.something[Key1]=Value1;
//     }
// }
// var ref=new data(); 
// ref.adding("postcode","m234");
// ref.adding("regno","50");

// console.log(ref.something["postcode"]);
// console.log(ref.something["regno"]);


// class nationwide{
//     constructor(){
//         this.records={}
//     }
//     adding(Key,ValueFunction){
//         this.records.push[Key]=ValueFunction;
//     }
// }
// var ref=new nationwide();
// ref.adding(records.push("training"),function(){
//     console.log("do study");
// })

// var refevents = require("events");
// var emitter = new refevents.EventEmitter();

// emitter.on("boom", function(){
//     console.log("hello");
// });
// emitter.on("file", function(){
//     console.log("Hello");
// });
// emitter.emit("boom");
// emitter.emit("file");

// var count = 0;
// var FS = require("fs");
// var F= FS.createReadStream("file.txt",{
//     encoding:'utf8'})
//     F.on('data',function(text){
//         count+=1
//        console.log(text);
//    });
//    F.on('end',function(){
//        console.log(count);
//        console.log("File finished");
//    });

// var count = 0;
// var FS = require("fs");
// var F2= FS.createWriteStream("file8.txt");
// var F=FS.createReadStream("file.txt",{encoding:'utf8'})

//     F.on('data',function(text){
//         count+=1
//         for(var i = 0; i<text.length; i++){
//             if (text.substring(i,i+1)=="e"){
//                 F2.write("!!!!!!!!!!!!!!!");
//             }
//             else{
//                 F2.write(text.substring(i,i+1))
//             }
//     }
//    })
//    F.on('end',function(){
//        console.log(count);
//        console.log("File finished");
//    });

// var http=require('http');
// var server=http.createServer(function(request,response){
//     console.log("Request Recieved");
// });     
// server.listen(4001);

// var http=require('http');
// var RequestFunction=(function(request,response){
//     if(request.url=='/home'){
//         console.log("This is the home page");
//     }
//     if(request.url=='/login'){
//         console.log("This is the login page");
//     }
// })
// var server=http.createServer(RequestFunction);
// server.listen(4001);

// var http1=require("http")

// var Process=function(request, response){}
//     if(request.url=="/home"){
//         response.writeHead(200, {'context-type':'text/html'})
//         response.write("<B> This is the home page </B>")
//         response.write("Made by Max Hand")
//     }
//     if(request.url=="/aboutus"){
//         response.writeHead(200, {'context-type':'text/html'})
//         response.write("<B> This is the about us page </B>")
//     }
//     response.end()
// }
// var server=http1.createServer(Process)
// server.listen(4001)

// var http=require('http')
// var myurl=require('url')
// var process=function(req,res){
//     res.writeHead(200, {'content-type':'text/html'})
//     if(req.url=="/"){
//         res.write("<A href='http://localhost:4001/timestable'> Times Table </A>")
//         res.write("<BR>")
//         res.write("<A href='http://localhost:4001/selecttimestable'> Select Times Table </A>")
//     }
//     if (req.url=="/timestable"){
//     for(var i =1; i<10; i++){
//         res.write('2x'+'='+(2*i))
//         res.write('<BR>')
//     }
// }
//     if(req.url=="/selecttimestable"){
//     res.write("<h2> Select any number </h2>")
//     for(var j=1; j<=10; j++){
//         res.write("<A href='http://localhost:4001/generatetable?t=" + j +"'> The "+ j + " times table </A>")
//         res.write("<br>")
//     }
// }
//     if(req.url=="/generate")
//     res.end()
//     }
//     var server=http.createServer(process)
//     server.listen(4001)

// var http=require("http")
// var url=require("url")

// var process=function(request,response){
//     var urldata=url.parse(request.url, true)
//     if(urldata.pathname=='/add'){
//         var result= parseInt(urldata.query.no1)+parseInt(urldata.query.no2)
//         response.write("Result is: "+ result)
//     }
//     response.end()
// }
// var server=http.createServer(process)
// server.listen(4001)
// console.log("hey")

