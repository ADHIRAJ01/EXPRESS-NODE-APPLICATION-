//OBJECTIVE -> ARRAY METHODS 

// let array=[10,20,30,40,50];

// let arr2=[];

/*
for (let i=0;i<array.length;i++) {
    console.log(array[i]*array[i]);
    arr2[i]=array[i]*array[i];
}
console.log('array is = ',arr2);
*/
//------------------------------------------------------
/*
//map is a function or data type consider like function
//for every element is passes over to a function

let array=[1,2,3,4,5];

function mapAll(element){
    return element*element;
}

//forEach
array.forEach((e,index)=>{                  //forEach loop + mapping ( element , index )
    console.log(index,"index");
    console.log(e ," is value");
});

let arr3 = array.map(mapAll);
let arr4 = array.map((e)=>e*e );
console.log(" ARRAY 3 IS = ",arr3);
console.log("ARRAY 4 IS =",arr4);
*/
//-----------------------------------------------------
//let addTwoNum = (a,b)
//MAP AND FILTER
/*
let array = [5,10,15,20,25,30];
let newArray = array.filter((e)=>{
    return e>20;
});
let newArray2 = array.map((e)=>{
    return e>20;
}); 
let newArray3 = array
    .filter((e)=> e >=20)
    .map((e)=> {
        console.log(e);
    });
let newArray4 = array
    .filter((e)=> e>20)
    .map((e)=>{ return e});

//console.log(newArray4.map((e)=> console.log("VALUE E IS = ", e)));
    

console.log("new ARRAY IS = ",newArray);
console.log("new ARRAY2 IS = ",newArray2);
console.log("new ARRAY3 IS = ",newArray3);
console.log("new ARRAY4 IS = ",newArray4);

*/

    
//console.log("array 3 = ",newArray3);
//------------------------------------------------------------------
//FIND AND FINDINDEX
/*
let array = [1,3,66,23,20];
let findValue = array.find((e)=> e>20);

console.log("FINVALUE IS = " , findValue);

let findValueIndex = array.findIndex((e)=> e>20);
console.log(findValueIndex," IS VALUE OF INDEX ");


let indexValue = array.indexOf(20);
console.log(indexValue," IS THE INDEX");
*/

//--------------------------------------------------------------------

//COMPARATORS 
//COMPARATORS ARE LIKE COMPARING 2 VALUES WITHIN OBJECTS - SEARCH GOOGLE

// //SORT
// let array=[1,4,2,7,4,6];
// let sortarr = array.sort(array);
// console.log(sortarr," IS SORTED ARRAY ");
//-----------------------------------------------------------------
//IF ARRAY ARE EQUAL OR NOT
//OBJECT KEYS() ->similar like dictionary in python having key:value PAIRS
/*
console.log(20=='20');
console.log(20==='20');

let obj1 = { name:'adhiraj',age:20,loc:'india'};
let obj2 = { name:'adhiraj'};

if( obj1 === obj2) {
    return true;
}

console.log("KEYS IN OBJECT 1 ARE = ",Object.keys(obj1));         //USED TO GET KEYS PRESENT IN THE OBJECT 

if(Object.keys(obj1).length !== obj1){
    console.log("INDISE IF LOOP = ",obj1);
    console.log("LENGTH OF OBJECT 1 = ",Object.keys(obj1).length );
   // console.log(obj1.length());
}
*/
//--------------------------------------------------------
//OOPS CONCEPTS

// CLASS AND OBJECT -> CLASS(BLUEPRINT) OBJECT(FEATURES)
// OOPS- ENCAPSULATION (binding functions and features inside an object and hide from application) , INHERITANCE (to import properties of parent class)

// function Tree(typeoftree) {}            // -> object constructor

//   var bananaTree = new Tree('banana');        // -> banana instance of tree

// // 
// INHERITANCE
/*
class Animal {
    noFlags;
    color;
    family;

    constructor(noFlags , color , family ) {
        this.noFlags = noFlags;
        this.color = color;
        this.family = family;
    }
    
    showAnimal() {
        console.log(`THE FAMILY IS ${this.family}`);
    }
}

class Dog extends Animal {
    super();
    super.Animal=animal;

}
*/
//---------------------------------------------------------------------


// DESTRUCTURING
/*
const name = this.state.name;
const age = this.state.age;
const gender = this.age.gender;

const { name , age , gender } = this.state;

DESTRUCTURING MEANS INSTEAD OF CALLING IN EVERY LINE JUST DO IT IN ONE LINE 
*/


let arr1 = {name:'adhiraj',age:20};
let arr2= {name: 'asndns', age: 13 , term:3};
function EqualObject(arr1,arr2){
    if(Object.keys(arr1).length === Object.keys(arr2).length){
        console.log("equal");
    }
    else console.log("not equal ", arr1.key);
    for(let key of Object.keys(arr1)){
        console.log(arr1[key]);
        console.log(typeof arr1[key]);
    }
}
console.log("working");
console.log(Object.keys(arr1));
console.log(Object.keys(arr2));
EqualObject(arr1,arr2);



/*
REST OPERATORS 
(...var1) - needs practice- passes whole data of any size
*/