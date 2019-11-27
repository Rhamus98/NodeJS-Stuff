
var add=function(a,b){
    return new Promise((resolve,reject)=>{
        if(a!=b){
            var result=a+b
            resolve(result)
        }
        else{
            reject("Some Error has occured")
        }
    })
}
var ref=add(2,2)
ref.then(function(res){
    console.log(res)
},
function(Error){
    console.log(Error)
})