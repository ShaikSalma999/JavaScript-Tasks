//1.Print Number
for(let a =1 ; a <= 20; a++){
    console.log(a);
  }


//2. Odd Numbers
for(let b = 1 ; b <= 50; b++){
    if(b % 2 == 1){
       console.log("Odd :", b);
     }
}


//3. Multiplication Table
for(let c = 1; c <=10; c++){
    console.log(`7 * ${c} = ${7 * c}`);
}


//4. Reverse Counting
let d = 20
while(d >= 0){
    console.log("Reverse Counting :",d);
    d--;
}


//5. Sum of Numbers
let sum = 0
for(let e = 1; e <= 100; e++){
    sum += e;
}
console.log("Total sum :",sum);


//6. Array Loop
let fruits = ["apple","banana","orange","grapes"];
for(let f = 0; f < fruits.length; f++){
    console.log(fruits[f]);
}


//7. Count Even Numbers
let count = 0
for(let h =1; h <= 50; h++){
    if(h%2 == 0)
    count++
 }
 console.log("Total Even Numbers:", count);


//8. Star Pattern
for(let i = 1; i <= 5; i++){
    let Pattern = "";
for(let j = 1; j <= i; j++){
    Pattern += "*"
}    
    console.log(Pattern);
   }


//9. Simple Function
function welcome(){
    console.log("Welcome to JavaScript");
    }
  welcome()


//10. Function with Parameter
function fun(name){
    console.log("Hello", name);
    }
    fun("Naveen")


//11. Add Two Numbers
function Addition(t,s){
    console.log("Addition of Two Numbers:", t + s);
    }
    Addition(10,20)


//12. Salary Bonus
function addBonus(salary,bonus){
    return salary + bonus;
}    
let salary = 50000
let bonus = 5000
let totalsalary = addBonus(salary, bonus)
console.log("Total Salary:", totalsalary);


//13. Object Loop
let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
};
for(let key in student){
    console.log(key + " : " + student[key]); 
}


//14. Find Largest Number
function largest(x,y){
    if(x > y){
        return x;
    }else{
        return y;
    }
}
console.log(largest(10,50));


//15. Mini Employee Task
let employee ={
    name : "Salma",
    department : "IT",
    salary : 50000
};
function employeeDetails(emp, bonus){
    console.log("Employee Name:", emp.name);
    console.log("Employee Department:", emp.department);
    console.log("Employee Salary:", emp.salary);
    let salaryAfterBonus = emp.salary + bonus;
    console.log("Salary After Bonus:", + salaryAfterBonus);
}
employeeDetails(employee,5000)