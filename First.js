var message = "shafeeq is back is shafeeq no";
var checkedword = [];
var usedword = [];
var newsentence = "";
var word = "";

for(var i = 0; i<message.length; i++){
    if(message.substring(i,i+1)==" "){
        for(var j=0; j<message.length; j++){
            if(word==usedword[j]){
                word="";
            }

        }
        if(word !== ""){
            newsentence+=word + " ";
            usedword.push(word);
            word = "";
        }



    }
    else{
        word+=message.substring(i,i+1);

    }
}
console.log(usedword);
console.log(newsentence + word);
