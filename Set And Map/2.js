// Write a function countOccurrences(arr) that uses a Map to count the occurrences of each element in an array.

var arr = [1, 2, 2, 3, 4, 4, 5]

function countoccureance(arr) {

    var map = new Map()

    for(var i of arr)
    {
        if(map.has(i))
        {
            map.set(i,map.get(i)+1)
        }
        else{
            map.set(i,1)
        }
    }

    return map
}

console.log(countoccureance(arr))