/*
COMPONENTS -> REUSUABLE UI (can take external info or hardcore info)

CLASS COMPONENT - complicated
FUNCTIONAL COMPONENT  - easy  -(PREFFERED)

parent compoenent -> child component

*/
//we can use this again and again similarly is component
/*
function myname(name) {
    console.log(`NAME IS ${name}`);
}
*/
//testcompoenent is child of app component bcz testcomponent is returned to app component
//import TestComponent from './TestComponent';

/*----MOUTING AND UNMOUTING AND UPDATE 
//FIRST time component comes to scrn is mounting and when component goes away is clled unmounting
//UPDATE when change is made 
*/

//class Test extends Component -> test= child , Component - parent 

//IN JSX we write javascript expression not js code 
//render function used for rendering the feature

//HOOKS gives power to functional component of class based compoenent

//COMPONENT LIFE CYCLE -> CREATED - MOUNTED - UPDATED - UNMOUNTED
/*
after the component is rendered on webpage, then 
-
componentDidMount()      -> this function is called 

//CONDITIONAL RENDERING = (this.fea ? (abc),(bdh));
//map to render components

//CLASS BASED COMPONENT(sum , if sum>10 print , sum<10 , sum=0

function Name(props){               //functional component , props = proper ties like passing values   
    return (
    <h1>colour is {this.color}</h1>
    );
}

function Game() {

    const name = {
        name: 'Game',
        age:20
    }

    const gamename = "foothball";

    return (
        <>
            <h2>WORKING WELL</h2>;
            <Name color="orange"></Name>            // we can pass value in two ways first is by defining value and other is passing value 
            <Name color= { name } />            // passing value a object 
        </>
    );
}
ReaactDOM.render(<Game />, document.getElementById('root'));      //from here component is called and value is passed 
ReaactDOM.render(<Game />, document.getElementById('root'));      //from here component is called and value is passed 

//whenever we may call component and pass value that gets accessible by props
//================================================================================================================================
function Child(props){
    return {
        <h2> the value is { props.brand.name }</h2>
    }
}

function Parent(){
    const value = {
        name:'abcd',
        age:28
    }

    return {
        I AM RETURNING VALUE FROM CHILD BELOW
        <Child brand = { value } />
    }
}

*/

//-----------------------------------------------------------
/*
         EVENING

draw diagram of components 

//state = component part (object)
this.state.users.map((user)=> <h1>{user}</h1>)
*/




//data is stored inside objects 
// ----------------------------------------------------------------
/*
CLASS COMPONENT

state = {                           //state value
    name : 'ADHIRAJ'
};

render(){
this.setState({...this.state , name: 'Prafful'});           //setState is used to chnage the property of state 
return <test name = {this.state.name} />;}
*/
//---------------------------------------------------------------------
/*
App class component 


state={
    .....,
    ......
};

setPhone(phoneNumber) {
    this.setState({...this.state , phone:phoneNumber});
}
*/
//--------------------------------------------------------------------------------
/*
CHILD TO PARENT VALUE CHANGE 

lifting state up 

    A   testvariable(not a state) , setTestVar(val) { this.testvariable = val }
    |
    B   setTestVar("adhiraj")

    in this case A= parent component , have setTestVar function which changes value of testvariable  but as it is not a state so it is not
    a state so it will not re render but it's value will change whem we call that function setTestVar from child class .

*/