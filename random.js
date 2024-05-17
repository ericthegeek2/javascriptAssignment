let num1 = prompt('please input a number between 1 and 10')
let randomNum = Math.floor(Math.random() * 11)

if(num1 === randomNum && num1 !== 0){
    console.log('Good Work')
}else{
    console.log('Not matched')
}

