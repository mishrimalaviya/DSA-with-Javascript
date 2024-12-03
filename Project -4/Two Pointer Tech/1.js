var arr = [1, 2, 3, 4, 6]
var target = 6
var left = 0
var right = arr.length - 1
var sum = 0
function s()
{
    while (left < right) {
        sum = arr[left] + arr[right]

        if(sum==target)
        {
            return [left,right]
        }
        if(sum>target)
        {
            right--
        }
        if(sum<target)
        {
            left++
        }
    }
    return [-1,-1]
}
console.log(s())
