var arr=[0, 1, 0, 3, 12]

for(var i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]==0)
        {
            var n=arr[i]
            arr[i]=arr[j]
            arr[j]=n
        }
    }
}
console.log(arr)