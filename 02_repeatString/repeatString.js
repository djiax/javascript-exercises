const repeatString = function(string,num) {
    if(num<0)return "ERROR"
    let theString="";
    for(let i =0; i<num;i++){
        theString+=string;
    }
    return theString;
};

// Do not edit below this line
module.exports = repeatString;
