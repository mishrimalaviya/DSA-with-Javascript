var q1=[]
var q2=[]

function push(v1)
{
    q2.push(v1)

    while(q1.length>0)
    {
        q2.push(q1.shift())
    }
    [q1,q2]=[q2,q1]
}

function shift()
{
    return q2.shift()
}

push(10)
push(20)
push(30)
push(40)

console.log(q1.shift())


