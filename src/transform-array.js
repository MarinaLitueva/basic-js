module.exports =  function transform(arr1) {
    arr = arr1.slice()
    if (!Array.isArray(arr)) {
      throw new Error();
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--double-next") {
        if (arr[i] != arr.slice(-1)) {
          arr[i] = arr[i + 1];
        } else arr.pop();
        
      } else if (arr[i] === "--double-prev") {
         if (i > 0) {
          arr[i] = arr[i - 1];
        } else arr.shift();
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next") {
        if (i !== arr.length-1) {
          arr = arr.splice(i, 2);
          i--
        } else arr.pop();
      }     
      else if (arr[i] === "--discard-prev") {
        if (i - 1 > 0) {
            arr = arr.splice(i - 1, 2);
        } else arr.shift()
      } 
    }
  
    return arr;
}