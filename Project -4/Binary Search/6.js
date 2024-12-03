arr = [1, 3, 5, 7, 9, 11]
target = 7
left = 0
right = arr.length - 1
function binary() {
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) {
            return `The index of the targeted value is ${mid}`
        }

        if (arr[mid] < target) {
            left = mid + 1
        }
       else if (arr[mid] > target) {
            right = mid - 1
        }
    }

    return -1


}
console.log(binary())