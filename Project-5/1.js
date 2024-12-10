// Q1: Find Maximum Element

var arr=[12, 3 ,45 ,7 ,23, 9]

var max=-Infinity

for(var i=0;i<arr.length;i++)
{
    if(max<arr[i])
    {
        max=arr[i]
    }
}

console.log(max)