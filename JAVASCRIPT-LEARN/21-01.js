//DSA

/*
QUES. CREATE JS CLASS with property listRoot which represent linkedlist (class implementation) . INSIDE CLASS create
2 member function 
1) hasLast() : boolean 
returns true if list is not empty else return false
2) getLast() : integer/null
function return value of last node in LL and deletes last node , returns null if list is empty!

*/
// class node
// {
//     constructor(value , next) {
//         this.value = value;
//         this.next = next;
//     }

//     hasLast() {
//         if (!this.next){
//             return true;
//         }
//         else return false;
//     }

//     getLast(){
//         if(!this.next){
//             return this.value;            
//         }
//         else {
//             if(!this.next.value)
//         }
//     }
// }



// let ar1=[24,51,123];
// let ar2=[];
// ar1.forEach((e)=>{
//     ar2=e+ar2;    
// });
// console.log(ar2);

// let len=ar1.length;
// console.log(len);
/*
const stu = [
    {
        name:'aaa',
        age:12
    },
    {
        name: 'wo',
        age:20
    }
];
console.log(stu.length);

let age = stu.map((e)=>e.age);
console.log(Math.max(...age));
console.log(Math.min(...age));
*/

class LinkNext {
    constructor (value , next) {
        this.alue=value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        
    }
}