// factorial 

function fa(a) {
    if (a <= 1) {
        return a
    }

    return a * fa(a - 1)
}
console.log(fa(5))