/*
PROMISE IS CONCEPT THAT WE NEED TO WAIT BY THE PROMISE THT FUNCTION WILL RETURN SOMETHING FOR SURE AFTER SOME TIME
PROMISE IS USED BY JS WHEN WE NEED TO WAIT OR WANT THE JS TO WAIT BCZ IT IS NECESSARY BUT JS USED TO JUMP SO TO PREVENT FROM JUMPING WE USE PROMISE
MAKING API CLL MAY TAKE TIME 
(IMPORTANT TOPIC)
PROMISE IS CREATED AT BACKEND AND
CALLING PROMISE IS DONE BY FRONT END USING REACT OR SO 
*/
//REDUCE FUNCTION
//ASYNC IN NATURE JUMP AND BACK DISCO DAANCER TYPE
/*
how we make promise-> 
function Abc() {
    return new Promise((resolve , reject)=> {
        if else when ever we need to pass true condition use resolve("value passed inside it")
        else when ever we need to send error , we use reject("value inside it")
    }
}

we catch Promises using .then("for success") and .catch("for errors")
*/



// let sum = (a,b) => {
//     setTimeout(() => {
//         console.log('WORKING INSIDE after time');
//     },2000);
    
//     setInterval(() => {
//         console.log("looped inside ")  
//     },1000);
//     console.log("BHAHAR KAYU NIKLA VAPIS JA ");
    
// }
// console.log("working=",sum(2,3));

//-----------------------------------------------------------

// let sum2 = (a,b) => {
//     setTimeout(() => {
//         return new Promise((resolve, reject) =>{
//             setTimeout(() =>{
//                 console.log('WORKING INSIDE after time');
//                 resolve();
//             },2000);
            
//     setInterval(() => {
//         console.log("looped inside ")  
//     },1000);
//     console.log("BHAHAR KAYU NIKLA VAPIS JA ");
// },2000);
//     });
// };

//----------------------------------------------------------------
 //PROMISES ARE MADE FROM BACKEND AND ARE USED BY FRONT END 
 /*
let p = new Promise((resolve, reject) =>{
    let a = 1+2;                                                //promise that it will be true
    if(a==2) {                              //if promise is true then resolve(passing any value)
        resolve('Success');
    }
    else {                                  //else it will reject with a value 
        reject('fail');
    }
})



//FRONTEND WORK 
p.then((vara) => {                              //if promise is true then used under vara
    console.log(" returned value is "+vara);
}).catch((msg) => {                             //if promise is false then the value is stored using catch
    console.log(" CATCH ERROR ", msg);
    showdetail(msg)
})

function showdetail(data){
    console.log("data received is this ",data);
}
*/
//---------------------------------------------------------------
//instead of such functions  we use PROMISES to ensure whenever we have the data it returns
// const userLeft = false;
// const userwatchingmeme = true;

// function TutorialWatching(correct,wrong) {
//     if(userLeft) {
//         console.log("user has left");
//         wrong({
//             name: 'user has left ',
//             message: ':('
//         })
//     }
//     else if(userwatchingmeme) {
//         console.log(" user is watching");
//         wrong({
//             name: 'user not watching memes ',
//             message: ':( so sad memes'
//         })
//     }
//     else {
//         console.log( " NOTHING WRONG ");
//         correct("WOW GREAT");
//     }
// }

// TutorialWatchingError((message)=>{
//     console.log(" everything was correct ", message);
// },(error)=> {
//     console.log("NOT WELL ",error.name , " MESSAGE IS ",error.message);
// })
//----------------------------------------------------------------
/*
const userLeft = false;
const userwatchingmeme = true;

function TutorialWatchingPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            console.log("user has left");
            reject({
                name: 'user has left ',
                message: ':('
            })
        }
        else if(userwatchingmeme) {
            console.log(" user is watching");
            reject({
                name: 'user not watching memes ',
                message: ':( so sad memes'
            })
        }
        else {
            console.log( " NOTHING WRONG ");
            resolve("WOW GREAT");
        }
});

TutorialWatchingPromise().then((message)=>{
    console.log(" everything was correct ", message);
}).catch((error)=>{
    console.log("NOT WELL ",error.name , " MESSAGE IS ",error.message);
})
}
*/
//--------------------RUNNING MULTIPLE PROMISE AT A TIME-----------
/*
const videoone = new Promise((resolve, reject) => {
    resolve("VIDEO 1 DONE")
})

const videotwo = new Promise((resolve, reject) => {
    resolve("VIDEO 2 DONE")
})


const videothree = new Promise((resolve, reject) => {
    resolve("VIDEO 3 DONE")
})
//running multiple promises at same
Promise.all([
    videoone,
    videotwo,
    videothree    
]).then((msg)=> {
    console.log(msg);
    return msg;
})
*/