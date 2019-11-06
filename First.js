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

var count = 0;
var FS = require("fs");
var F2= FS.createWriteStream("file8.txt");
var F=FS.createReadStream("file.txt",{encoding:'utf8'})

    F.on('data',function(text){
        count+=1
        for(var i = 0; i<text.length; i++){
            if (text.substring(i,i+1)=="e"){
                F2.write("!!!!!!!!!!!!!!!");
            }
            else{
                F2.write(text.substring(i,i+1))
            }
    }
   })
   F.on('end',function(){
       console.log(count);
       console.log("File finished");
   });