//Task 1. Student Registration Form
let student = prompt("Enter Your Name")
let department = prompt("Enter Your Department")
const age = prompt("Enter Your Age") 
console.log(`Welcome ${student}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);


//Task 2.ATM Withdraw System
let balance = 10000
let Withdrawal = Number(prompt("Enter withdraw amount:"));
if(Withdrawal >= 100 && Withdrawal <= balance){
    console.log("Transaction Successful");
}else if(Withdrawal < 100){
    console.log("Minimum withdrawal amount is 100");
}else{
    console.log("Insufficient Balance");
}


//Task 3. Swiggy Discount Checker
let orderAmount  = prompt("Enetr Your Amount")
let swiggy = orderAmount > 499? "Free Delivery Avilable" : "Delivery Charges Applied"
console.log(swiggy);


//Task 4. Instagram login System
let correctUsername = "admin"
let correctpassword = "1234"
let username = prompt("Enter Username:")
if(username === correctUsername){
    let password = prompt("Enter password:")
    if(password === correctpassword){
        console.log("Login Successful");
    }
}else{
    console.log("Wrong Password");
}


//Task 5. Traffic Signal System
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


//Task 6. Employee Salary Calculator
function salaryCalculator(basicsalary, bonus){
    let totalsalary = basicsalary + bonus
    return totalsalary;
}
let addBonus = salaryCalculator(25000,5000)
console.log("total Salary:", addBonus);


//Task 7. E - Commerce Cart Total
let prices = [100,200,300,400];
let totalprice = 0;
for(let i = 0; i < prices.length; i++){
    totalprice += prices[i]
}
let averagePrice = totalprice / prices.length;
console.log("Total Price", totalprice);
console.log("Average Price:", averagePrice);


//Task 8. WhatsApp Contact Book
let Obj = {name : "Salma", phone : "7337411234", status : "Working"};
for(let key in Obj){
    console.log(key + ":" + Obj[key]); 
}


//Task 9. Movie Ticket Booking
function payment(){
    console.log("Payment Successful");
}
function bookTicket(callback){
    console.log("Ticket Booking Completed");
    callback();
}
bookTicket(payment)


//Task 10. Food Delivery Time Tracker
function* foodDelivery(){
    yield "Order Confirmed"
    yield "Preparing Food"
    yield "Out for Delivery"
    yield "Delivered"
}
let genVal = foodDelivery()
for(let d1 of genVal){
    console.log(d1);
}