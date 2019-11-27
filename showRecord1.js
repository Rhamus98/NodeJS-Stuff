var dbfcon=require('./dbConnection')

module.export=
function showRecords(request,response){
    var con=dbfcon()
    con.query("Select * from personal", function(err,result){
        if(err){
            console.log("Error")
        }
        else{
            response.writeHead(200,{'Content=Type':'text/HTML'})
            result.forEach(function(record){
                response.write(""+record.empno)
                response.write(""+record.name)
                response.write(""+record.address)
            })
            response.end()
        }
    })
}