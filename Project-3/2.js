// Write a function to initialize a 3x3 2D array with random integer values between 1 and 100.

var arr=[]

for(var i=0;i<3;i++)
{
    arr1=[]
    for(j=0;j<3;j++)
    {
        let ram=Math.round(Math.random()*100)
        arr1.push(ram)
    }
    arr.push(arr1)
}
console.log(arr);
