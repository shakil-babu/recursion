
function Sum(n) {
    let sum = 0 ;
    if(n===0){
        return 0 ;
    }else{
        sum =n+ Sum(n-1);
    }
    return sum ;
}

let result = Sum(5);
console.log(result);