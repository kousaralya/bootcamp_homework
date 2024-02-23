// function to calculate simple interest
 function simpleInt(P,I,R){
    var simpleInt = (P*I*R)/100;
   return('principle interest is:' + simpleInt  )

 }
 console.log(simpleInt(4000,6,8));

 //function to calculate compound interest
   function compoundInt(){
   let principal = 10000, rate = 5,
        time = 2;
 
    /* Calculate compound interest */
    let A = principal *
        (Math.pow((1 + rate / 100), time));
    let compoundInt   = A - principal;
    return("Compound interest is " + compoundInt)
}
    console.log( compoundInt());

 //function to generate a random number
    function genRandom(){
       var genRandom =  Math.floor(Math.random() * 10);
       return('Random number is: ' + genRandom)
    }
    console.log(genRandom());

 //function to find factorial of a number
   function getFactroial(n){
    let n2 = (n*(n-1)*(n-2)*1);
    return('Factroial number is:' + n2)
   }
   console.log(getFactroial(5));

 //function to add unlimited numbers
  function addNumbers(...nums){
    let res = nums.reduce((num1,num2) => num1 + num2)
    return res

  }
  console.log(addNumbers(5));
  console.log(addNumbers(10,45));
  console.log(addNumbers(51,66,40));
  console.log(addNumbers(13,26,45,91));

  //function to combine unlimited arrays
   function addArrays(arr1,arr2){
    //const arr1 = ["mark", "jhon"];
   // const arr2 = [1, 2, 3];

    const arr3 = arr1.concat(arr2); 
    return arr3
   }
   console.log(addArrays(("june,july,may,feb"),[,1,2,3,5,8,9]));

   //function to find the count of a letter in a string
    function letterCount(text3){
      let length = text3.length;
      return length  
    }
    console.log(letterCount('kousalya'));
    console.log(letterCount('kousalya saravanan'));

    //function to check if a number is prime
      function checkPrime(num){
        
            if (num <= 1) {
            return false;
            }
            for (let i = 2; i <= Math. sqrt(num); i++) {
            if (num % i === 0) {
            return false;
            }
      }
      return true
    }
    console.log(checkPrime(1));
    console.log(checkPrime(100));
    console.log(checkPrime(324));