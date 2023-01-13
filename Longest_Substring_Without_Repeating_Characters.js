var lengthOfLongestSubstring = function(s) {
    let i=0;
    let j=0;
    let max = 0;
    let map = new Map();
    while(j<s.length){
        if(!map.has(s[j])){
            map.set(s[j],1)
            max = Math.max(map.size,max);
            j++
        }
        else{
            map.delete(s[i]);
            i++
        }
    }
    return max
    
};