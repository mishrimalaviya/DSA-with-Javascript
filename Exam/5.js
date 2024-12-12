// Write a function to reverse a string using a stack. Do not use built-in string reversal functions. Example:
// Input: "hello"
// Output: "olleh" 

var str="hello"
var st=""
var stack=[]

for(var i=0;i<str.length;i++)
{
    stack.push(str[i])
}

while(stack.length>0)
{
    st=st+stack.pop()
    
}
console.log(st)