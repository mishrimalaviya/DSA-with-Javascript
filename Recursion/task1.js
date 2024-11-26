// sum of n number 

function sum(a) {
    if (a < 1) {
        return a
    }
    return a + sum(a- 1)

}
console.log(sum(5))