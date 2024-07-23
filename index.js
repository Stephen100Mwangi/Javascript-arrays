// 1. Reverse an array

const numbers = [12, 67, 90, 23, 12, 54, 30];
const reversedArray = numbers.reverse ();
console.log (reversedArray);

// 2. Sum of elements

const marks = [90, 78, 85, 75, 80];
const totalMarks = marks.reduce ((a, b) => a + b, 0);
console.log (totalMarks);

// 3. Find largest number in an array

const data = [90, 78, 85, 75, 80];
const largestData = Math.max (...data);
console.log ('Largest data: ' + largestData);

// 4. Second largest number in an array

const examMarks = [90, 78, 85, 75, 80];
const highestMark = Math.max (...examMarks);
const secondHighest = Math.max (
  ...examMarks.filter (num => num !== highestMark)
);

console.log ('Second highest mark: ' + secondHighest);

//  5. Remove duplicates

const usersAge = [20, 21, 21, 45, 76, 34, 23, 90, 45, 89, 45, 32, 12, 16];
const uniqueAges = [...new Set (usersAge)];
console.log ('Unique ages: ' + uniqueAges);

// 6. Sort an object array

const friends = [
  {name: 'Steve', age: 20},
  {name: 'Joe', age: 55},
  {name: 'Sam', age: 32},
  {name: 'Tom', age: 35},
  {name: 'Abraham', age: 16},
];

const sortedArray = friends.sort ((a, b) => a.age - b.age);
console.log (sortedArray);

// 7. Count occurrence of elements

const alphabets = ['a', 'b', 'c', 'd', 'a', 's', 't', 'd', 'b', 's'];
const counts = alphabets.reduce ((a, b) => {
  a[b] = (a[b] || 0) + 1;
  return a;
}, {});

console.log (counts);

// 8. Merge two arrays

const firstArray = [20, 30, 40, 50, 60];
const secondArray = [25, 35, 45, 55, 65];

const mergedArray = [...firstArray, ...secondArray];
console.log (mergedArray);

// 9. Check if array is sorted

const array = [9, 4, 3, 7, 2, 10];
const isSorted = array.every ((val, i, arr) => !i || arr[i - 1] <= val);
console.log (isSorted);

// 10. Remove a specific element

const heightData = [90, 20, 45, 47, 30, 56];
const elementToRemove = 90;
const newArray = heightData.filter (x => x !== elementToRemove);
console.log (newArray);

// 11. Find index of an element

const ageArray = [23, 78, 89, 25, 78];
const indexOf78 = ageArray.indexOf (78);
console.log (indexOf78);

// 12. Remove Falsy values

const myArray = [0,1,'a',false,-1,true,null,undefined,NaN];
const trueArray = myArray.filter(Boolean);
console.log(trueArray);
