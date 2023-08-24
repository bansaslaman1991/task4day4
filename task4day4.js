//question 1a
var annoymousOdd=function(arr){
  for(var i=0;i<arr.length;i++){
          if(arr[i]%2==1){
              console.log(arr[i])
          }
      }
}
annoymousOdd([2,4,5,6,8,9,7,1])

//question 1b
var strarr= ['aman','sakshi','payal','siara']

var annonymousupper=function(arr){
  var ustrarr=[]
  for(var i=0; i<arr.length; i++){
    ustrarr[i]=arr[i].toUpperCase()
}
console.log(ustrarr)

}
annonymousupper(strarr)

//question1c

var annoymousSum=function(arr){
  var total=0;
      for(var i=0;i<arr.length;i++){
           total=total+arr[i]   
      }
      console.log(total)
}
annoymousSum([2,4,5,6,8,9,7,1])


//question1d

var annoymousIsPrime=function(arr){
  for(var i=0;i<arr.length;i++){
      var isprime=true
      for(var j=2;j<arr[i];j++){
          if(arr[i]%j==0){
              isprime=false
              break
          }
          if(isprime){
              console.log(`${arr[i]}is a prime number`)
          }
          else{
              console.log(`${arr[i]} is not a prime number`)
          }
      }
         
  }
  console.log(total)
}
annoymousIsPrime([2,4,5,6,23,9,7,1])

//question 1e

let palindromeArray = (arr) => {
  //initialize to true
  let isPalindrome = true;
  
  //loop through half length of the array
  for(let i = 0; i < arr.length / 2; i++) {

      //check if first half is equal to the second half
      if(arr[i] !== arr[arr.length - i - 1]){
        isPalindrome = false; 
        break;
      }
  }
  
  return isPalindrome;
}

//remaining i m not getting.i need to raise a query