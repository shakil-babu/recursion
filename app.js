// let numbers = [2,3,45]
// let Summetion = function(arr){
//     let sum = arr[0];
//    if(arr.length === 0){
//        return 0 ;
//    }else{
//         sum = sum+Summetion(arr.slice(1))
//    }
//    return sum ;
// }
// let res = Summetion(numbers);
// console.log(res);

/*
let sum = 2;
sum = 2 + (3 + [45])
sum = 2+(3 + 45)
sum = 2 + 48 ;
sum = 50 ;

*/


let numbers = [1,2,3,4,5,40,5,6,7];

// for (let i = 0; i < numbers.length; i++) {
//     const ele = numbers[i];
//     if(ele > maxNumber){
//         maxNumber = ele ;
//     }
// }
// console.log(maxNumber);

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
