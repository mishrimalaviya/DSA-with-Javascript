// Q10: Remove Spaces

var str="hello world python"

var st=''

for(var i=0;i<str.length;i++)
{
    if(str[i] != " ")
    {
        st=st+str[i]
    }
}
console.log(st)