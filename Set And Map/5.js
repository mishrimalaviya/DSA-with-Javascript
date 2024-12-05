var arr1=[1,2,3]
var arr2=[3,4,5]

function finduni(arr1,arr2)
{
    var set =new Set(arr1)
    

    for(var i of arr2)
    {
        if(!set.has(i))
        {
            set.add(i)
         
        }
    }
    return set
}
console.log(finduni(arr1,arr2))