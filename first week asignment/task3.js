let obj = {}  //declaring an object
obj[1] = 'one' //initializing object at index 1 to string one
obj['1'] = 'String One'    //

console.log(obj[1]);  //printing or accessing object at index 1
console.log(obj['1']);
console.log(obj[1] === obj['1']); //comparing object at index 1 ...This JavaScript code snippet will print either true or false depending on the equality of obj[1] and obj['1']. The answer depends on whether obj is an object with properties named 1 and '1', and whether they hold the same value.


