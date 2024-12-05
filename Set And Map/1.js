// Write a function getUnique(arr) that takes an array and returns an array of unique elements using a Set.
// var set= new Set()

// var s=set.has(1)
// console.log(s)

var arr=[1, 2, 2, 3, 4, 4, 5]
function  getUnique(arr){
    var set = new Set()
    var a=[]
    for(var i of arr)
    {
        if(!set.has(i))
        {
            set.add(i)
            a.push(i)
        }
    }

    return a
}

console.log(getUnique(arr))




