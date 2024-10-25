// Write a program to find the sum of the diagonal elements of a square matrix.

var arr=[
    [2,3,4],
    [5,6,7],
    [8,9,1]
]

var sum=0

for(var i=0;i<arr.length;i++)
{
    for(var j=0;j<arr[i].length;j++)
    {
        if(arr[i]==arr[j])
        {
            console.log(arr[i][j])
            sum=sum+arr[i][j]
        }
    }

}
console.log("the sum diagonal elements = "+sum)
