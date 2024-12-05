var arr1=[1,2,3]
var arr2=[3,4,5]

function finduni(arr1,arr2)
{
    var set =new Set(arr1)
    var a=[]

    for(var i of arr2)
    {
        set.add(i)
    }

    for(var j of set)
    {
        a.push(j)
    }
    return a
}
console.log(finduni(arr1,arr2))