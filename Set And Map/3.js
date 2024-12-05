var arr1=[1,2,3,4]
var arr2=[3,4,5,6]

function findIntersection(arr1,arr2)
{
    var set =new Set(arr1)
    var a=[]

    for(var i of arr2)
    {
        if(set.has(i))
        {
            a.push(i)
        }
    }

    return a
}
console.log(findIntersection(arr1,arr2))