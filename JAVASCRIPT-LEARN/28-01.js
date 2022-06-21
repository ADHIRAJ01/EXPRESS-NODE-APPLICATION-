/*
--------EVENT HANDLING----------
ALL CHNAGES THAT WILL BE MADE WHEN WE DO SOMETHING like ( onclick , onpress , etc.) , SIMILARLY IN REACT but camel class (onClick) in react 

document.querySelector(;button').addEventListener('click', ()=>{    -> qyerySelector selects whole thing inside that thing 
    console.log('ioi');
    document.....<any changes to be made>
})

event.target => tells what are we targetting at the dom 

//MULTIPLE EVENT HANDLER


--------------------PREVENT DEFAULT----------------------------------------------------------------
document.querySelector('submit').addEventListener('click', ()=>{
    e.preventDefault();                 -> LIKE SUBMIT BUTTON HAS DEFAULT FUNCTIONALITY OF GET REQUEST AND UPDAATING VALUE , SO TO PREVENT SUCH EVENT WE USE EVENT DEFAULT TO SAY TO NOT TO SOMETHING ON IT'S OWN
}))


//----------------------------BACKEND INFO----------------------------------------------------------------
AFTER MAKING THE BACKEND WE CAN COMMUNICATE WITH OTHER BACKEND ALSO LIKE MAKING BACKEND ON JAVA THEN COMMINATING IT WITH PYTHON AND SO BUT IT SHOULD ALSO SUPPORT THE FEATURE THAT IS NEEDED


*/

//-------------------------------------------EVENING--------------------------------------
/*
storing data is used is done under == this.state{....}

we can write -> 
const userdata = this.state.userdata;
const value=this.state.value;

-we can write it like this (destructuring concept)
const { userdata , value }= this.state;


---constructor -- render --- componentDidMount ----- 
(stores values)          

when value while searching is changed in setState then render is called 

JSX FILES ARE MADE WITH .jsx extension

//=============================RUNNING REACT ON GITHUB PAGES=================================
GITHUB DEPLOY PAGES INSTALLATION
1) --npm i gh-pages or npm i gh-pages --save-dev (for development purpose)

2) IN PACKAGE.JSON 
    a) "homepage": "https://<usernameofgithub>.github.io/<reponame>"

    in scripts:
    b) "predeploy": "npm run build',
    c) "deploy": "gh-pages -d build"


3) then on terminal type:
    npm run deploy

*/



//NETWORKING CONCEPTS LITTLE BIT
/*  
APIPA - AUTOMATIC PRIVATE IP ASDRESSING
public IP - map it to doain name - that ip with link with port no. of computer in which it is running 

ngroa - library which makes port number public to make it global to host application ( for 2 hrs only)
*/
