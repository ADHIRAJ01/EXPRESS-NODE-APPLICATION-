/* STATE AND PROPS (IMP.) -

STATE ->  (if change then component is going to re render) , one state can one max one component , one component can hve multiple states , 
            state can be defined by anything but preffered using as js object , setStare(used to pass info from child to parent)
PROPS -> can't be modified , value passed from parent to child 
*/

/*EX-1 HERE main is parent , sum= child function so passing value from parent to child - similar is beaviour of props in react

let a=10 ;
function sum(a){
    console.log(a);
}

function main(){
    let b=a+10;
    sum(b);
}
main();

//----------------------------------------------------------------

const App = () => {
    let name = "priyanka kumari";

    return <Test name={name} />;            //passing information from parent to child 
};


//for function component {props.name}

//for function component {this.props.name}
return <this is {this.props.name} is the name />   //directly called from App parent compoenent -( IN CLASS BASED COMPONENT)

//IF WORKING WITH FUNCTIONAL COMPOE NT THEN WE WILL USE
return <this is {props.name} />
*/
//-----------------------------------------------------------------------
//-------EVENING----------------------------------------------------------------
/*
{this.props.children} - used to call data of children in parent component

pass whole data then render every element in child component
this.arr.forEach((map)=>{
    <children component />
});

componentDidMount(){
    //it runs only once while rendering data on page
}

*/

//PROP-TYPES
/*
install - npm i prop-types
to have hands o which type of dom you are passing like function or user or etc. like in java we say function or int or typescript we specify.

*/