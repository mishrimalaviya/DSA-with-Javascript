var a="mishri"
var str=a.split("")

left=0
right=str.length-1
// without pointer 
// for(var i=a.length-1;i>=0;i--)
// {
//     str=str+a[i]
// }
// console.log(str)
// with pointer 

while(left<right)
{
    let temp=str[left]
    str[left]=str[right]
    str[right]=temp

    left++
    right--
}
a=str.join("")
console.log(a)

