let numbers = [1,2,3,4,5,40,5,6,7];
let findMax = (arr) => {
    let maxNumber = arr[0];
    if(arr.length === 0){
        return 0 ;
    }else{
        let element = findMax(arr.slice(1));
        if(element > maxNumber){
            maxNumber = element ;
        }
        return maxNumber ;
    }
}

let a= findMax(numbers)
console.log(a);