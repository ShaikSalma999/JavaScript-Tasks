//Section 1:Variables

//1 Output :15
var a = 10
    a = 15
    console.log(a); //15

//2 Output : error
//let b = 20
//let b = 30 // Uncaught SyntaxError: Identifier 'b' has already been declared

//3 Output : 50
const c = 50
console.log(c); //50

//4 Output : error
//const x = 10
//x = 20 //Uncaught TypeError: Assignment to constant variable.

//5 Output : 10
var p = 5
var p = 10
console.log(p); //10

//6 Output : 35
let q = 25
q = q + 10
console.log(q); //35

//7 Output : 10
const r = 7
console.log(r + 3); //10

//8 Output : var
var a = 10 //var

//Section 2:Console Methods

//9 Output :
console.log();

//10 Output :
console.warn();

//11 Output :
console.error();

//12 Output :
//console.clear(); // It clears all previous output

//Section 3:Data Types

//13 Output : string
let d = "hello"
console.log(typeof(d)); //String


//14 Output : number
let b = 100
console.log(typeof(b)); //Number

//15 Output : boolean
let e = false
console.log(typeof(e)); //boolean

//16 Output : undefined
let f;
console.log(f);//Undefined
 
//17 Output : a1 is null
let a1 = 10 //a1 is the null
let a2 = a1++

//18 Converting string to number
let str = "25"
let num = Number(str);
console.log(num);//25
console.log(typeof(num));//number


//Section 4:Arrays

//19 Output :(3) ['Apple', 'Banana', 'Cherry']
let Array =["Apple", "Banana","Cherry"];
console.log(Array);

//20 Output :b
let arr1 = ["a","b","c"];
console.log(arr1[1]);//b

//21 Output :y
let arr2 = ["x","y","z"];
console.log(arr2[1]);//y

//console.log(arr[0]);
 
//23 Output :2
let arr3 = ["Apple","banana"];
console.log(arr3.length);//2
 
//24 Output :(4) ['apple', 'grape', 'banana','cherry']
let arr4 = ["apple","grape","banana"];
arr4.push("cherry")
console.log(arr4);//(4) ['apple', 'grape', 'banana','cherry']

//Section 5:Objects

//25 Output :{Name :'salma',Age : 28}
let obj = {Name:"Salma", Age : 28};
console.log(obj);//{Name :'salma',Age : 28}

//26 Output :salma
let obj1 = {name: "Salma"};
console.log(obj1.name);//Salma

//27 Output :banana
let obj2 = {
    fruits: ["apple","banana"]
};
console.log(obj2.fruits[1]);//banana
 
//28.How to access last element inside object array?
let obj3 = { 
   fruits: ["apple","banana","cherry"] };
console.log(obj3.fruits[obj3.fruits.length-1]);//cherry

//Section 6:Arithmetic Operators

//29 Output :8
console.log(5+3);//8

//30 Output :1
console.log(10 % 3);//1

//31 Output :8
console.log(2**3);//8

//32 Output :5
console.log(10 / 2);//5

//Section 8:Increment/Decrement

//33 Output :6
let a3 = 5
a3++
console.log(a3);//6

//34 Output :6  5
let b1 = 5
let c1 = b1++
console.log(b1,c1);//6 5

//35 Output :6  6
let x = 5
let y = ++x
console.log(x,y);//6  6

//36 Output :2  3
let m = 3
let n = m--
console.log(m,n);//2  3

//Section 8:Comparison & Logical

//37 Output :true
console.log(5 == "5");//true

//38 Output :false
console.log(5 === "5");//false

//39 Output :true
console.log(true && false || true);//true

//Section 9:Ternary

//40 Output :yes
5 > 3 ? console.log("Yes"):console.log("No");//Yes


















 
