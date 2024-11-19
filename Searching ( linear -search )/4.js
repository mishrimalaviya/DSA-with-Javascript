// Find the Index of the Last Occurrence of an Element

var arr=[1, 2, 3, 2, 4]

var target=2;
function lastoccu()
{
    for(var i=arr.length;i>0;i--)
    {
        if(target==arr[i])
        {
            return `Last occurrence of ${arr[i]} is at index ${i}`
        }
    }
}
console.log(lastoccu())