// Sum of Digit
function su(n) {
    if (n <= 0) {
        return n
    }

    return Math.floor((n % 10) + su(n / 10))
}
console.log(su(123))