//  Q2: Count Even Numbers

var arr=[2, 3, 4 ,7 ,8]

var count=0

for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        count++
    }
}
console.log(count)