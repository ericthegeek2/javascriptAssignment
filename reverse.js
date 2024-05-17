function invertObject(obj) {
    const inverted = {};

    for (const [key, value] of Object.entries(obj)) {
        inverted[value] = key;
    }

    return inverted;
}

// Example usage:
const exampleObj = {
    name: 'Alice',
    age: '30',
    profession: 'Engineer'
};

const result = invertObject(exampleObj);
console.log(result);

