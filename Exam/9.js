
function binary()
{
    var arr=[4, 5, 6, 7, 0, 1, 2];
    var target=0;
    var low=0;
    var high=arr.length-1;

    for(var i=0;i<arr.length;i++)
    {
        var mid=Math.floor((low+high)/2)
        if(arr[mid]==target)
        {
           return  mid;
        }

        if(arr[mid]>=arr[low])
        {
            if(target<=arr[mid] && target>=arr[low])
            {
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
       else{
        if(target>=arr[mid] && target<=arr[low])
            {
                low=mid+1;
            }
            else{
                high=mid-1;
            }
       }
    }
    return -1;
}
console.log(binary());