arr=[20,4,5,78,2]

for(var i=0;i<arr.length;i++)
{
    let min=i;
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[j]<arr[min])
        {
            min=j
        }

        let temp =arr[min]
        arr[min]=arr[i]
        arr[i]=temp
    }

}
console.log(arr)

