// Q7: Reverse String

var str="hello"
var stack=[]
var st=""

for(var i of str)
{
    stack.push(i)
}

while(stack.length>0)
{
    st=st+stack.pop()
}
console.log(st)

