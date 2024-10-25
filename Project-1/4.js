// 4. Sort the Array with any sorting Algorithm
let arr = [5, 6, 8, 7, 4, 6, 3, 9, 2, 1]

console.log("The original value")

console.log(arr)
console.log("The sorted value")


for (var i = 0; i < arr.length - 1; i++) {
        let mi = i

        for (let j = i + 1; j < arr.length; j++) {
                if (arr[mi] > arr[j]) {
                        mi = j
                }
        }
        
        let thi = arr[mi];
        arr[mi] = arr[i]
        arr[i] = thi

}
console.log(arr);