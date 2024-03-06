function findMaxValue(arr) {
    if (arr.length === 0) {
      return null; // Return null for an empty array
    }
  
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
  
  // Main function to use the helper function
  function main() {
    // Example: Find the maximum value in an array
    let numbers = [7, 2, 9, 4, 1, 6];
    let maxValue = findMaxValue(numbers);
   
    if (maxValue !== null) {
      console.log("The maximum value in the array is: " + maxValue);
    } else {
      console.log("The array is empty.");
    }
  }
  
  // Call the main function to execute the code
  main();