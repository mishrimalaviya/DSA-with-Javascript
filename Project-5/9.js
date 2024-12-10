// Q9: Convert to Uppercase
var str='hello world'
var st=''

for(var i=0;i<str.length;i++)
{
    if(i==0 || str[i-1]==" ")
    {
       st=st+ str[i].toUpperCase() 
    // console.log(str[i])
    }
    else{
        st=st+str[i].toLowerCase()
    }
}
console.log(st)