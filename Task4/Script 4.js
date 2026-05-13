//Task 1. Basic function
function WelcomeUser(name){
    console.log("Welcome", name);    
}
WelcomeUser("Naveen")


//Task 2. Parameter + Return
function squareNumber(a){
        return a * a ;
}
console.log(squareNumber(5));


//Task 3. Object Function
let employee = {
         name : "Rahul",
         salary : 50000
}
function employeeBonus(emp,bonus){
    console.log("Employee Name:", emp.name);  
    let salaryAfterBonus = emp.salary + bonus;
    console.log("Salary After Bonus:", + salaryAfterBonus);
}
employeeBonus(employee,5000)
    

//Task 4. Scope Checking
function ScopeCheck(){
    if(true){
    var b = "var variable function & global scope"
    let c = "let variable block scope"
    const d = "const variable block scope"
}
console.log(b);
//console.log(c);//Uncaught ReferenceError: c is not defined
//console.log(d);//Uncaught ReferenceError: d is not defined
}
ScopeCheck()


//Task 5. Arrow Function
var Arrow = (a,b)=>{
    console.log(a + b);
}
Arrow(10,20)


//Task 6. Callback Function
function multilpy(x, y){
    return x * y;   
}
function calculator(Callback,num1,num2){
    return(num1 * num2);
}
console.log(calculator(multilpy,5,2))


//Task 7. Generator Operator
function* Offers(){
    yield "50% OFF"
    yield "Free Delivery"
    yield "Cashback"
}
let genVal = Offers()
for(let d1 of genVal){
    console.log(d1);
}


//Task 8. Default Parameter
function student(name,course="JavaScript"){
    console.log("Student Name:",name);
    console.log("Corse:",course);
}
student("Salma")
student("Ayesha", "Python")


//Task 9. Currying
function multi(k){
    return function(l){
        return function(m){
            return k * l* m;
        }
    }
}
console.log(multi(2)(3)(4));


//Task 10. Spread Operator
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let TotalArray = [...arr1, ...arr2]
console.log(TotalArray);


//Task 11. Object Spread
let obj = {name : "Naveen"}
let obj1 = {role : "Developer"}
let FinalObject = {...obj, ...obj1}
console.log(FinalObject);


//Task 12.Rest Operator
function numbers(...num){
    console.log(num);
    console.log(1 + 2 + 3 + 4 );  
}
numbers(1,2,3,4)


//Task 13. Mini Challenge
let students = [];
function addStudent(name, marks) {
    let student = {
        name: name,
        marks: marks
    };

    students.push(student);
}
function printStudents() {
    console.log("Student List:");
    students.forEach((student, index) => {
        console.log(
            index + 1,
            student.name,
            "- Marks:",
            student.marks
        );
    });
}

function calculateMarks(student, callback) {
    return callback(student.marks);
}

function addBonus(student, bonus) {
    return {
        ...student,
        marks: student.marks + bonus
    };
}
function totalMarks(...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}

addStudent("Salma", 80);
addStudent("Rahul", 70);
addStudent("Asha", 90);

printStudents();

let result = calculateMarks(students[0], function (marks) {
    return marks + 5;
});

console.log("Marks after Callback Bonus:", result);

students[0] = addBonus(students[0], 10);
students[1] = addBonus(students[1], 10);
students[2] = addBonus(students[2], 10);

console.log("After Adding Bonus:");
printStudents();

console.log("Total Marks:",totalMarks(80, 70, 90));