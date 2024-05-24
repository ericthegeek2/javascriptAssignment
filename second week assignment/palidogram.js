//palidogram truthy
// dad...dad
//mum....mum

let string1 = 'cat'


let storeString =' '
let storeStringRev = ' ' 


for(let i = 0; i < string1.length; i++){
     storeString = storeString + string1.charAt(i)

}

for(let i = 0; i < string1.length; i++){
    storeStringRev = string1.charAt(i) + storeStringRev         //reverse of the string
    
} 


 if(storeString.trim().toLowerCase() === storeStringRev.trim().toLowerCase()){
    console.log(`${string1.valueOf()} is a palindrom`);
 }else{
    console.log(`${string1.valueOf()} is not a palindrom`);
 }

 console.log(storeString);


 console.log(storeStringRev);





 // using map

 