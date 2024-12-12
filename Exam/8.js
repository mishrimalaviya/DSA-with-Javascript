var arr = [1,2,3,4,5,6]
var target  = 9;

function sum(a,t)
{
    var left = 0;
   var right = arr.length-1;
   var ans = 'false';

   while(left<=right)
   {
    var sum = arr[left] + arr[right];
   

    if(sum==target)
    {
      ans = true 
      break;
      
    }

    if(sum < target)
    {
        left++ ;
    }
    else{
        right--;
    }
   }
   console.log(ans);
   
}

sum(arr,target);