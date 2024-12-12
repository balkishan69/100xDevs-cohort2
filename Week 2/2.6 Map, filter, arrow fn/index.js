// *** MAP:

//Given an array, give me back a new array in which every value is multiplied by 2
const input = [1,2,3,4,5];

// * One simple solution
const newArray = [];
for(let i=0;i<input.length;i++){
    newArray.push(input[i]*2);
}
console.log(newArray);


// * Other solution using "map"  (see notes of notebook)
function transform(i){
    return i*2;
}
// map(arr,transform);  -> [2,4,6,8,10]
const ans = input.map(transform);   // we can also put the function here itself
                                     // const ans = input.map(function(i){
                                     //   return i*2;
                                     // })

console.log(ans);


// * Homework: Create a map function that takes 2 inputs, an array and a transformation callback function and transforms the array into a new one using a transformation function
// Solution: (rough)
const map = (arr,fn) => {
    const transformedArr = [];
    for(let i=0;i<arr.length;i++){
        transformedArr.push(fn(arr[i]));
    }
    return transformedArr;
}



// *** FILTER:

// Given an input array, give me all the even values from it
const arr = [1,2,3,4,5];

// * One simple solution
const newArr = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);


// *Another solution using filter
function filterLogic(n){
    if(n%2==0){
        return true;
    } else{
        return false;
    }
}
// filter(arr,filteringLogic);  -> [2,4]
const ans1= arr.filter(filterLogic);   // we can also put the function here itself
                                     // const ans1 = arr.filter(function (n) => {
                                     //    if(n%2==0){
                                     //       return true;
                                     //    } else{
                                     //          return false;
                                     //     }       
                                     // })

console.log(ans1);


// Another helper function is ".startsWith()"
// for e.g. console.log("harkirat".startsWith("h"))   -> will return true
// There are so many other functions: forEach, reduce, spread, destructing, spread operator






