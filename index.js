// Question 1
console.log("--------Question 1-------------");
let sum=0;

// A function to Print  the Sum of an array 
function printSum(){
for(i=0;i<myArray.length;i++){
sum += myArray[i];
}
console.log("The Sum of the Array is "+ " = "+ sum);
}

let myArray=[10,20,30,40];
// printing to screen the Array values
console.log(myArray);
// printing the total sum of the Array
printSum(myArray);

//Question 2
console.log("--------Question 2-------------");
let a=[10,5,8];
let b=[9,5,8];

//Printing to screen the challenge rating value for  alice and bob 
console.log("Alice's Challenge, triplet a = "+"["+ a +"]");
console.log("Bob's Challenge, triplet b = "+ " [" +b + "]");

let aliceAward=0;
let bobAward=0;

// code to find their different comparison point 

    for(j=0; j<a.length;j++){

    if(a[j]>b[j]){
            
            aliceAward++;
        }
        else if(a[j]===b[j]){
            aliceAward+=0;
            bobAward+=0;
        }
        else{
            bobAward++;
        }
    }
     
    //Printing the points earned by each person
    console.log("Comparison Points:");
    console.log("Alice total point is"+ " = " + aliceAward );
    console.log("Bob total point  is " + " = " + bobAward);
    
//Question 3
console.log("--------Question 3-------------");

let Numbers=[1,2,3,-4,0,0,0,-9,20,0,9];

console.log(Numbers);

let negativeNumbers=0;
let positiveNumbers=0;
let zeros=0;

//To count the number of negative, positive and zero elements. element>0 =positive, element<0=negative.

    for(num=0; num<Numbers.length; num++){
         if ((Numbers[num])> 0){
            positiveNumbers++;
        }
        else  if ((Numbers[num])< 0){
           negativeNumbers++;

        }
        else if ((Numbers[num])==0) {
        zeros++;
}
else{
    console.log(invalid);
}
    }

let positiveRatio= positiveNumbers/Numbers.length;
console.log("The ratio of the elements that are positive =" + " " + positiveRatio.toFixed(2));

let negativeRatio=negativeNumbers/Numbers.length;
console.log("The ratio of the elements that are negative =" + " " + negativeRatio.toFixed(2));

let zeroRatio=zeros/Numbers.length;
console.log("The ratio of the elements that are zeros ="    +  " " +  zeroRatio.toFixed(2));


//Question 4

console.log("--------Question 4-------------");
// function to calculate the sum of two numbers

 function firstFunction(firstNumber,secondNumber){
          let sum=  firstNumber+secondNumber;

          // printing to screen the sum of the numbers
            console.log("The sum of the two numbers " + firstNumber + " & " + secondNumber + " = "+ sum);
 }
 // calling the function to calculate the sum of two numbers assigned values
 firstFunction(5,9);





