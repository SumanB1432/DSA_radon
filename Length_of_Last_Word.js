var lengthOfLastWord = function(s) {
    let str = s.trim();
    if(str.length==1 && str[0]!=" "){
        return 1
    }
    
    let count = 0;
    for(let i=str.length-1;i>=0;i--){
        if(str[i]!=" "){
            count++
        }
        else{
            break
        }
    }
    return count;
    
    
};