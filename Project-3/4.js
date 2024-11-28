// Write a function to transpose a given 2D array (swap rows and columns).

var arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log("The array")
console.log(arr)
var arr1=[]

for(var i=0;i<arr.length;i++)
{
    arr1[i]=[]
    for(var j=0;j<arr[i].length;j++){
        arr1[i][j]=arr[j][i]
    }
}
console.log("The transpose array")
console.log(arr1)