//Q5: Search Element

var arr=[1,2,3,4,5,6]
var target=4

function se()
{
    for(var i=0;i<arr.length;i++)
        {
            if(arr[i]==target)
            {
               return true
            }
        
        }
    return false
}
console.log(se())



