function getAllPropertyNames(obj) {
    let props = new Set();
    
    // Traverse the prototype chain
    while (obj) {
        // Get own property names and add to the set
        Object.getOwnPropertyNames(obj).forEach(prop => props.add(prop));
        // Move up the prototype chain
        obj = Object.getPrototypeOf(obj);
    }
    
    return Array.from(props);
}

// Example usage:
const exampleObj = Object.create({
    inheritedProp: 'I am inherited'
});
exampleObj.ownProp = 'I am own property';

const result = getAllPropertyNames(exampleObj);
console.log(result);


