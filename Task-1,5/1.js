function staircase(n) {
    for(var i=n;i>0;i--)
    {   
         sp=" " 
        for(var j=i;j>1;j--)
        {
            sp=sp+""
           
        }
        for(var z=i;z<=n;z++)
        {
            sp=sp+"#"
        }
        console.log(sp)

    }


}
staircase(6)