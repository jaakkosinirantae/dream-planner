/* advanced_data_processing.js */

// This code performs various sophisticated data processing operations

// Generate a random array of numbers
const generateRandomArray = (length, min, max) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    arr.push(num);
  }
  return arr;
};

// Sorts an array using quicksort algorithm
const quicksort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
};

// Perform data processing operations
const dataProcessing = () => {
  // Generate random array
  const arr = generateRandomArray(100, 1, 1000);
  console.log("Generated Array:", arr);

  // Sort the array
  const sortedArr = quicksort(arr);
  console.log("Sorted Array:", sortedArr);

  // Find the sum of all elements
  const sum = sortedArr.reduce((acc, val) => acc + val, 0);
  console.log("Sum:", sum);

  // Find the maximum value in the array
  const max = Math.max(...sortedArr);
  console.log("Maximum Value:", max);

  // Find the average value of the array
  const average = sum / sortedArr.length;
  console.log("Average:", average);

  // Find the number of even and odd elements
  let evenCount = 0;
  let oddCount = 0;

  sortedArr.forEach((num) => {
    num % 2 === 0 ? evenCount++ : oddCount++;
  });

  console.log("Even Count:", evenCount);
  console.log("Odd Count:", oddCount);
};

// Execute the data processing operations
dataProcessing();