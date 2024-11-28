// Implement a function to replace all occurrences of a specific value in a 2D array with another given value.

var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


var target=5


for(var i=0;i<arr.length;i++)
{
    for(var j=0;j<arr[i].length;j++)
    {
        if(arr[i][j]==target)
        {
            arr[i][j]=50
        }
    }
}
console.log(arr)
