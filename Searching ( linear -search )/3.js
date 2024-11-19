// Count Occurrences of a Target Element

var arr=[1, 2, 2, 3, 4, 2]
var target=2
count=0

for(var i=0;i<=arr.length;i++)
{
    if(target==arr[i])
    {
        count++
    }

}
console.log(count)