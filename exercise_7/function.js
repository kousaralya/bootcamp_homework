
//let pi = 3.14;
 
//function findArea(r) {
  //  return ("Area of Circle is: " + pi * r * r);
//}
//console.log(findArea(5));

//function computePerimeterOfACircle(radius) {
   // var result = radius * 2 * Math.PI;
   // return ("Perimeter of circle is: " + result );
  //}
  
  //var output = computePerimeterOfACircle(4);
 // console.log(output); 

  function circleValues(radius){
    var result = Math.PI * radius * radius;
    var result1 = radius * 2 * Math.PI;
    return ("Area of Circle is: " + result ) +  ("and Perimeter of circle is:" + result1);
    
  }
   console.log(circleValues(3));

   //function to reverse number
   function reverseNum(num1){
    var num1 = '1,2,3,4,5,6,7,8,9' ;
    let result2 = num1.toString().split('').reverse().join('');
    return( "reverse of this number is :" + result2)
   }
   console.log(reverseNum());
  
   //count number of vowles in srting
   
   function countVowel(text1){
    
    //let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text1.length;
    return("Number of vowles in input string is " + length)
   
}
   console.log(countVowel("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));

   //Flatten arr using reduce
   let a = [
       [1,2],
    [ 
        [3,4] 
    ], 
    [ 
      [ [5] ,[6]]
    ]
];
  
  const flatten = arr => arr.reduce((a, v) => {
    if (v instanceof Array) {
      return a.concat(flatten(v))
    }
       else {
      a.push(v);
      return a;
    }
  }, [])
  
  
  console.log(flatten(a));
   
 let array = [[2, 4, 6, 8], [10, 12, 14], [16, 18, 20, 22]]

const flatten1 = array.reduce((a, b) => {
  return a.concat(b)
})

console.log(flatten1)

// function that check str is palindrome or not 
function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];//forward character 
        let y = str[j - i];//backward character
        if (x != y) {
            // return false if string not match
            return false;
        }
    }
    /// return true if string is palindrome
    return true;
 
}
 

//function that print output if string is palindrome
function is_palindrome(str) {
    // variable that is true if string is palindrome
    let ans = check_palindrome(str);
    //condition checking ans is true or not 
    if (ans == true) {
        console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string not a palindrome");
    }
}
// test variable
let test = "racecar";
is_palindrome(test);