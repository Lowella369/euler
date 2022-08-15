//Find the sum of all the multiples of 3 or 5 below 1000

// SOLUTIONS:
// create a loop and iterate through 1000
// create variable sum that holds the sum of all numbers multiples of 3 or 5 and initialize it to zero
// check if number is multipe of 3 or 5 in each loop
// if number is multiple of 3 or 5 then add that number to variable sum


function sum_multiples_3_5(range){
    let sum = 0
    for(i=1; i < range; i++){
        if(i%3==0 || i%5==0){
            console.log(i)
            sum += i;
        }
    }

    return sum;
}

console.log("total: ", sum_multiples_3_5(1000))