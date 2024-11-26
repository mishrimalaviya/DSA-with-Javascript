// perform the simple recursion function 

function simple(data)
{
    if(data>0)
    {
        console.log(data)
        simple(data-1)
    }
}
var data=5
simple(data)