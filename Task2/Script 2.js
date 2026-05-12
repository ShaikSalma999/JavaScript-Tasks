//Task 1
console.log(typeof("10" +5));//String
console.log(typeof(10 + true));//Number
console.log(typeof(false + null));//Number
console.log(typeof("Hello" + undefined));//String
console.log(typeof([1,2] + 5));//String


//Task 2
console.log(typeof("Hello" + 20));//String
console.log(typeof(true + 15));//Number
console.log(typeof([1,2,3] + "Hi"));//String
console.log(typeof({A : "Hello"} + 10));//String
console.log(typeof(null + 14));//Number


//Task 3
console.log(Number("500"));//500
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number("abc"));//NaN
console.log(Number([100]));//100


//Task 4
console.log(Boolean(""));//false
console.log(Boolean("Javascript"));//true
console.log(Boolean(0));//false
console.log(Boolean(1));//true
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean([]));//true
console.log(Boolean({}));//true


//Task 5
let mark = prompt("Enter your Marks")
if (mark  >= 35){
       console.log("Pass");
       
}else{
     console.log("Fail");
     
}//pass


//Task 6
let age = prompt("Enter your Age")
if( age >= 18){
    console.log("Eligible");
  }else{
   console.log("Not Eligible");  }


//Task 7
let a = 50
let b = 80
let c = 30
if (a >= b && a >= c) {
    console.log("a is the greatest: " + a);
} else if (b >= a && b >= c) {
    console.log("b is the greatest: " + b);
} else if (c >= a && c >= b){
    console.log("c is the greatest: " + c);
}else{
    console.log("None of the Above");
}


//Task 8
let trafficLight = prompt("Enter color of Signal Light")
switch(trafficLight){
   
     case "red": console.log("Stop");
    break;

     case "yellow": console.log("Ready");
    break;

     case "green": console.log("Go");
    break;
    
    default: console.log("Have a Nice Day");
    break;
}

    
//Task 9
let username = prompt("Enter Your Username")
let password = prompt("Enter Your Password")
if(username === "admin"){
    if(password === "1234"){
        alert("Login Successful");
    }}else{
        alert("Invalid Login");
         }


//Task 10
let hour = prompt("Enter the current Time")
if(hour>=1 && hour<=12){
    alert("Good Morning");
    
}else if(hour>=13 && hour<=15){
    alert("Good Afternoon");
    
}else if(hour>=16 && hour<=19){
    alert("Good Evening");
    
}else if(hour>=20 && hour<=24){
    alert("Good Night");
 }else{
    alert("Check correct Time");
     }

//Bonus Challenge
//console.log(true + true)//2
//console.log("5" - 2)//3
//console.log("5" + 2)//52
//console.log(null + 1)//1
//console.log(undefined + 1)//NaN
//console.log(Boolean(" "))//true
//console.log(Number(true))//1
