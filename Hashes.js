// strings only
// not constant time O(n)
// severely clusters data
// function hash(key, len){ 
//     let total = 0;
//     for (let char of key) {
//         // map 'a' to 1, 'b' to 2, 'c' to 3, etc...
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % len;
//     }
//     return total;
// }

// only hashes the first 100 characters to save time 
// (not constant time but better than O(n) for large strings)
// multiply by a prime number to decrease clustering/collisions
// use a prime len (13) to further reduce collisions
function hash(key, len){
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % len;
    }
    return total;
}

