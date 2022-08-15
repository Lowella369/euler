// find the sum of all the even numbers in the Fibonacci 
// sequence which do not exceed given limit given limit.

//SOLUTIONS:
//Initialize and create variables for the first 2 even fibonacci number and the sum
//calculate sum of the even fibonacci numbers

function fibEvenSum(limit){
    let fibEven1 = 0;
    let fibEven2 = 2;
    let sum = fibEven1 + fibEven2;

    if (limit < 2){
        return 0;
    }
       
    while (fibEven2 <= limit)
    {
        let fibEven3 = 4 * fibEven2 + fibEven1;
       
        if (fibEven3 > limit){
            break;
        }
        fibEven1 = fibEven2;
        fibEven2 = fibEven3;
        sum += fibEven2;
     }
       
    return sum;
}
       
let limit = 4000000;
console.log("total: ", fibEvenSum(limit));