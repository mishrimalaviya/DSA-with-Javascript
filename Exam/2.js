var arr=[1,2,3,4,5]

var queue=[]

function enqueue(arr)
{
    queue.push(arr)
    console.log(queue)
}

function dequeue()
{
    return queue.shift()
}

function rever()
{
    var stack=[]
    var reverse=[]

    while(queue.length)
    {
        var q=dequeue()
        stack.push(q)
    }

    while(stack.length)
    {
        reverse.push(stack.pop())
    }
    enqueue(reverse)
}
enqueue(10)
enqueue(20)
enqueue(30)
rever()

