// 3. Print Numbers from 1 to N

function p(a)
{
    if(a<=0)
    {
        return a
    }

    p(a-1)
    console.log(a)
}
var a=5;
p(a)