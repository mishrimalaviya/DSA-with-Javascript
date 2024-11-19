// Find the First Occurrence of a Target Element

var arr=[10,20,30,40,50]
var target=30



function  FirstOccurrence(ar,tar)
{
    console.log(ar)
    for(var i=0;i<=ar.length;i++)
        {
            if(tar==ar[i])
            {
                return `First occurrence of ${ar[i]} is at index ${i}`
            }
        }

        return -1
}

console.log(FirstOccurrence(arr,target))
