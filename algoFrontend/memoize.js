// write a function, times10 that takes an argument, n , 
// and multiplies n times 10
const times10 = (n) => (n * 10);

console.log('times10 returns', times10(9));
// returns 90


// task2 use an object to cache the results of your times10 function
// create a function that checks if value for n has been calculated before
// if the value for n has not been calculated calculate and save the result to cache object


const cache = {}; // {9:90 }

const memoTimes10 = (n) => {
    if (n in cache) {
        console.log('fetching from cache: ', n);
        return cache[n];
    } else {
        console.log('Calculating result');
        let result = times10(n); // result is 90
        cache[n] = result; 
        return result;
    }
};
console.log('task2 calculated value', memoTimes10(9)); // calculated
console.log('task2 cached value: ', memoTimes10(9)); // cached


//task3 clean up global scope by moving cache inside function
// use closure to return a function that you can call later

// memoize with closure 
const memoizedClosureTimes10 = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('fetching from cache', n);
            return cache[n];
        } else {
            console.log('calculating result');
            let result = n * 10;
            cache[n] = result;
            return result;
        }
    };
};
// return function from meoizedAdd
const memoizedClosureTimes10 = memoizedClosureTimes10();

// making function more generic and reusable

const memoize = (cb) => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('fetching from cache', n);
            return cache[n];
        }
        else {
            console.log('calculating result');
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};
// return function from memoizedAdd
// passes in a function and returns a function
// with closure we have access to parentscope
const memoizedTimes10 = memoize(times10);
