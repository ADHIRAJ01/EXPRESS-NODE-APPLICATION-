/*
WORKING ON RECT APPLICATION
*/
//ReactDOM - virtual DOM 


//REACT RECONCILIATION 
/*
         App
          |
         div
         /  \
     func1   func2 
      |         |
     abc       def

      it works on tree - if you want to replace div then you need to replace whole portion

                App
                 |
                div
         /     /    \       \
     test   test    test    test

     if we make change one then all will re render bcz of same name 

    but if we want only to change test[4] then we can use test key={4} to modify and re render only 4th part
*/

// function Aoo() {
//     return (
//         <div>
//             <test key={1}/>;   
//             <test key={2}/>;
//             <test key={3}/>;
//             <test Key={4}/>;   
//         </div>
//     )
// }

//CRETAE COMPONENT - SHOW BOX (inside write name) - render box 10 time with unique key

/*
const getPosts = () => {
    fetch('https://www.w3schools.com/Js/js_api_fetch.asp')
    .then((response)=> {
        console.log(response.json());
        return response.json();
    })
    .then ((data)=> {
        console.log(data);
    })
    .catch((err)=> {
        console.log(err);
    })
}

getPosts();
*/

/* FETCH DOESN'T WORK IN NODE 

async function getText() {      //async making promise
    let response = await fetch("https://www.w3schools.com/Js/tryit.asp?filename=tryjs_api_fetch_await");
       //await -waiting for promise to return something
    let y = response.json();
    console.log(y);
}
getText();
*/
import fetch from 'mode-fetch';
async function getData() {
    let reponse = await fetch("https://www.w3schools.com/Js/tryit.asp?filename=tryjs_api_fetch_await").json();
    console.log(response , " worked ");
}
getData();