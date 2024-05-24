function getAllSubstrings(str) {
    let substrings = [];
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    
    return substrings;
}

// Sample data
let input = "dog";
let result = getAllSubstrings(input);

console.log(result);
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
