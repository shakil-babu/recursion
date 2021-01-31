let numbers = [2,3,45]
let Summetion = function(arr){
    let sum = arr[0];
   if(arr.length === 0){
       return 0 ;
   }else{
        sum = sum+Summetion(arr.slice(1))
   }
   return sum ;
}
let res = Summetion(numbers);
console.log(res);

/*
let sum = 2;
sum = 2 + (3 + [45])
sum = 2+(3 + 45)
sum = 2 + 48 ;
sum = 50 ;

*/