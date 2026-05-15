//Task 1. Student Attendance System
let presentStudents = ["Salam", "Ayesha", "Pasha"]
let absentStudents = ["Meher", "goutham"]
let allStudents = [...presentStudents, ...absentStudents]
allStudents.push("Karish");
console.log("Final Students List:");
console.log(allStudents);


//Task 2. E-Commerce Cart
let mobile = {
     brand : "Redmi",
     model : "Note 14 Pro",
     price : 21000
};
let charger = {
    chargerType : "Quick Charger",
    chargerPrice : 1000
};
let cartDetails = {...mobile, ...charger,
    deliveryDate : "17-May-2026",
};
console.log("Final Cart Details:");
console.log(cartDetails);
console.log("Delivery Date:",cartDetails.deliveryDate);



//Task 3. Food Delivery App
function orderFood(...items){
    console.log("Total items ordered:", items.length);
    console.log("First item:", items[0]);
    console.log("Last item:", items[items.length-1]);
}
orderFood("Pizza", "Burger", "Pasta", "Ice Cream")


//Task 4. Employee salary Filter
let employees = [{
    name : "Salma",
    salary : 40000
},
{
    name : "Ayesha",
    salary : 30000
},
{
    name : "Pasha",
    salary : 55000
},
{
    name : "Goutham",
    salary : 60000
}];
let filteredEmployees = employees.filter(employees => employees.salary > 50000);
console.log("Employees with salary above 50000:");
filteredEmployees.forEach(employees =>{
    console.log("Name:", employees.name);
    console.log("Salary:", employees.salary);
})



//Task 5. Online Game Score Board
let scores = [100, 200, 150, 250, 300]
let totalScore = scores.reduce((total,score) =>{
    return total + score;
},0);
console.log("Total Score of All Players:", totalScore);


