// factorial with loop

function computeFactorial(num) {
    var result = 1;

    for (var i = 2; i <= num; i++) {
        console.log(`result = ${result} * ${i} (${result * i})`);
        result *= i;
    }
    return result;
}
// inside the loop result is:
// result = 1 * 2(2)
// result = 2 * 3(6)
// result = 6 * 4(24)
// result = 24 * 5 (120)

// what pattern do you notice in the for loop?
// results *= 2;
// results *= 3;
// results *= 4;
// results *= 5

// with recursion 
function computeFactorial(num) {
    if (num === 1) {
        console.log('hitting the base case');
        return 1;
    } else {
        return num * computeFactorial(num - 1);
    }
}
computeFactorial(5); // 120


// whats the base case
// how do we get closer
// whats the work 

// just recursion no closure 
function MemoFnLoop(i, end) { // 1 , 3
    if (i < end) {
        MemoFnLoop(i + 1, end);
    }
}
// using closure with recursion
function wrapperFnLoop(start, end) {
    function recurse(i) {
        if (i < end) {
            recurse(i + 1);
        }
    }
    recurse(start);
}




// exercise
// rewrite function so that it uses loop not recursion
function joinElements(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index];

        if (index === array.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }
    return recurse(0, '');
}
joinElements(['s', 'cr', 't cod', ':):)'], 'e');

// above function using iterative approach not recursion 
function joinElements(array, joinString) {
    let resultSoFar = '';
    for (let i = 0; i < array.length - 1; i++) {
        resultSoFar += array[i] + joinString;
    }
    return resultSoFar + array[array.length - 1];
}
joinElements(['s', 'cr', 't cod', ':):)'], 'e');

//factorial recrusive method
function factorial(n) {
    if (n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}
//factorial using memoize function
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
const factorial = memoize(
    (x) => {
        if (x === 0) {
            return 1;
        } else {
            return x * factorial(x-1)
        }
    }
);
factorial(5);

