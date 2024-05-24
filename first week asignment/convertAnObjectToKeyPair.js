function objectToPairs(obj) {
    return Object.entries(obj);
}

// Example usage:
const exampleObj = {
    name: 'Alice',
    age: 30,
    profession: 'Engineer'
};

const result = objectToPairs(exampleObj);
console.log(result);

