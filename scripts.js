// import { myFunction } from "./app.js";

// import {myFunction as Func} from "./app.js";შესაძლებელია სახელი გადავარქვათ შემოიმპორტებისას და მაგალითად ამ შემთხვევაში ამ ფუნქციას ფაილში გამოვიყენებთ Func-ის ან ნებისმიერი იმ სახელის მეშვეობით რასაც დავარქმევთ

// import * as myVars from ".app.js"
// იმისათვის რომ ცალკ-ცალკე არ შემოვაიმპორტოთ ყველაფერი ამისათვის შეგვიძლია გამოვიყენოთ * ამ შემთხვევაში მაგალითად myFunction-ის გამოყენება რომ გვინდოდეს გამოვიყენებდით ასე myVars.myFunction(), myVars.x და ა.შ.

// იმპორტი ექსპორტი გვაქ ორი ტიპის, პირველია named ხოლო მეორე default იმპორტი ექსპორტი

const myFunc=()=>{
    {
    var x=12;
    let y=20;
}
console.log(x);
}

myFunc();
// console.log(myFunction());

class Car{
    constructor(name, year){
this.name=name;
this.year=year;
this.owner="elon musk";
    }

    outputInfo=()=>{
        console.log(`this is ${this.name} and it was released in ${this.year}`);
    };
}

let myCar1=new Car("Tesla", 2015);
console.log(myCar1);
console.log(myCar1.outputInfo( ));

function regularFunc(x,y){
    return x+y
};

const arrowFunc=(x,y)=>{
    return x+y
};

console.log(regularFunc(2,4));
console.log(arrowFunc(10,4)) ;

// იმ შემთხვევაში თუ გვინდა რომ ერთი რაღაცა დაგვირეთარნოს შეგვიძლია ფიგურული ფრჩხილები წავშალოთ მაგ

const simplifiedRegularFunc=(x,y)=>x+y;

console.log(simplifiedRegularFunc(20,10));

// ასევე, იმ შემთხვევაში თუ ერთ პარამეტრს იღებს ფუნქცია შეგვიძლია მრგვალი ფრჩხილები არ დავუწეროთ.

const simplifiedReguarFunc2=x=>x*10;
console.log(simplifiedReguarFunc2(10));

const arr=[1,2,3];

const newArr=arr.map((elem, index)=>index*2);
console.log(newArr);

// map გვიბრუნებს ახალ მასივს და არ ცვლის უკვე არსებულს. map-ის მეშვეობით წვდომა გვაქ როგორც ელემენტზე, ასევე ინდექსზე.

const persons=[
    {name:"anri", lastname:"adamia"},
    {name:"giorgi", lastname:"kontselidze"},
    {name:"kaxa", lastname:"tkeshelashvili"},
];

const fullNames=persons.map((person)=>[person.name,person.lastname].join(" "));

console.log(fullNames);
// შეგვიძლია map გამოვიყენოთ ობიექტებზეც. 


const numbers=[1,2,3,4,5,6,7,8];

const evenNumbers=numbers.filter((nums)=>nums%2===0);

console.log(evenNumbers);


const nums=[1,2,3,4,5];

const sumOfNumbers=nums.reduce((total,currentValue)=>{
console.log("total",total, "current",currentValue);
return total+currentValue;
},0)


const value=10;

const promise=new Promise((resolve, reject)=>{
if (value===10){
    resolve("resolved")
} else{
    reject("reject")
}
});

promise
.then((value)=>{console.log("then1",value);
return value*2})
.then((value)=>{console.log("then2",value);
return value*2})
.then((value)=>{console.log("then3",value);
return value*2})
.catch((err)=>console.log(".catch",err));

// იმ შემთხვევაში თუ ფუნქცია დარეზოლვდა გადავა then-ში, ხოლო თუ დარეჯექთდა გადავა catch-ში.