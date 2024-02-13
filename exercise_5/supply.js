      function calculateSupply(age,numPerDay){
        //var age = 21;
        var maxAge = 100;
        //var numPerDay = 2 
        //var calculateSupply =  numPerDay * 365 * maxAge - age ;
    
         return ('You will need ' + ((numPerDay * 365) * (maxAge - age)) + ' snacks to last you until the ripe old age of ' + maxAge);
}
         console.log(calculateSupply(12,2))
         console.log(calculateSupply(42,3.5))
         console.log(calculateSupply(10,2.3))
         
    
