// Check if a Target Element is Present in an Array 

var arr=[4, 7, 1, 9]
var target=5

function  bo(ar,tar)
{
    console.log(ar)
    for(var i=0;i<=ar.length;i++)
        {
            if(tar==ar[i])
            {
                return true
            }
        }

        return false
}

console.log(bo(arr,target))
