var arr=[1, 3, 5, 7, 9, 11];
var target=7;
var low=0;
var high=arr.length-1;

function b()
{
    for(var i=0;i<arr.length;i++)
        {
            var mid=Math.floor((low+high)/2)
            if(arr[mid]==target)
            {
                return mid;
            }
            if(arr[mid]<target)
            {
                low=mid+1;
            }
            else if(arr[mid]>target)
            {
                high=mid-1;
            }
        
        }
}
console.log(b())
