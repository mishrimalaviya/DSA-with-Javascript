var arr = [1, 2, 2, 3, 4, 4, 5]

function cout(arr) {

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

console.log(cout(arr))