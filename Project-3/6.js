// Write a function to modify all diagonal elements of a 4x4 matrix to 0.

var arr = [
  [5, 1, 2, 3],
  [4, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var i;
var j;

console.log("the normal diagonal");
console.log(arr);


for (i = 0, j = 0; j < arr.length; j++, i++) {
  arr[i][j] = 0;
}
console.log("the Updated diagonal with 0");

console.log(arr);
