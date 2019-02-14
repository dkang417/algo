// CHALLENGE 1

function sumFunc(arr) {
    // YOUR CODE HERE
  
    let sum=0; 
    
    for (let i = 0; i<arr.length; i++) {
      sum += arr[i];
      
    }
    return sum;
    
  }
  
  // Uncomment the lines below to test your work
  const array = [1, 2, 3, 4];
  console.log(sumFunc(array)); // -> should log 10
  
  function returnIterator(arr) {
    // YOUR CODE HERE
    let index = 0;
  
    return function() {
      const val = arr[index];
      index++;
      return val;
    }
    
  }
  
  // Uncomment the lines below to test your work
  const array2 = ['a', 'b', 'c', 'd'];
  const myIterator = returnIterator(array2);
  console.log(myIterator()); // -> should log 'a'
  console.log(myIterator()); // -> should log 'b'
  console.log(myIterator()); // -> should log 'c'
  console.log(myIterator()); // -> should log 'd'
  
  
  
  // CHALLENGE 2
  
  function nextIterator(arr) {
    // YOUR CODE HERE
  
      let index = 0;
    const iterator = {
      next: function(){
        let sum = arr[index];
        index++;
        return sum;
      }
    }
    return iterator;
  }
  
  // Uncomment the lines below to test your work
  const array3 = [1, 2, 3,4];
  const iteratorWithNext = nextIterator(array3);
  console.log(iteratorWithNext.next()); // -> should log 1
  console.log(iteratorWithNext.next()); // -> should log 2
  console.log(iteratorWithNext.next()); // -> should log 3
  console.log(iteratorWithNext.next());
  
  
  
  // CHALLENGE 3
  
  function sumArray(arr) {
    // YOUR CODE HERE
    // use your nextIterator function
    let accumulator = 0;
    let iterator = nextIterator(arr);
    let next = iterator.next();
    while(next) {
      accumulator += next;
      next = iterator.next();
    }
    return accumulator;
  
  }
  
  // Uncomment the lines below to test your work
  const array4 = [99,1,99,1];
  console.log(sumArray(array4)); // -> should log 10
  
  