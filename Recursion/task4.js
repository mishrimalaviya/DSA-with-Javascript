// 4. Find the nth Fibonacci Number

function f(b){
    if(b<=1){
        return b;
    }
    return f(b-1)+f(b-2)
}
console.log(f(10))