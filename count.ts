
// @ts-ignore
function Count(number : number[] , value : number) : number {
    let count : number = 0;
   for(let i = 0; i <= number.length; i ++){
       if (number[i] == value){
           count++;

       }
   }
    return count;
}
let data: number[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let a : number = 6;
let index = Count(data,a)
console.log(index);