// Flatten Array

// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    if (arr2d[0][0]) {
        for (var i = 0; i < arr2d.length ; i++) {
            for (var j = 0; j < arr2d[i].length; j++) {
                flat.push(arr2d[i][j])
            }
        }
    }
    else {
        return arr2d
    }
    return flat;
}

// [1,2,3,[1,4,3,5],[1,2,3]]

function isPresent2d(arr2d, value) {
    for (var i = 0; i < arr2d.length ; i++) {
        for (var j = 0; j < arr2d[i].length; j++) {
            if (arr2d[i][j] == value) {
                return true
            }
        }
    }
    return false
}

console.log("isPresent Function")
var found = isPresent2d([ [2, 5, 8], [3, 6, 1], [5, 7, 7] ], 19)
if (found) {
    console.log("The value is in the array")
}
else {
    console.log("The value is not in the array")
}

console.log("Flatten arrays")
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]