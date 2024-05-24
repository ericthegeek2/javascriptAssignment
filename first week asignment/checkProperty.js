function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

const exampleObj = {
    name: 'Alice',
    age: 30,
    profession: 'Engineer'
};

console.log(hasProperty(exampleObj, 'name')); // true
console.log(hasProperty(exampleObj, 'gender')); // false
