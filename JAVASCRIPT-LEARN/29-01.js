/* MOUNTING AND UNMOUNTING OF COMPONENT

when component is rendered on scrn then it is called mounting 
when component is on the scrn and getting removed of scrn then it is called unmounting 
component is updated when state of component is updated - updating of component

LIFE CYCLE IS USED FOR CLASS COMPONENTS -
HOOKS IS USED FOR FUNCTIONAL COMPONENT FOR LIFE CYCLE METHODS

IN LIFE CYCLE WE ARE CREATING AND DESTROYING COMPONENTS 

//componentDidMount -- used to  fetch information from API call 
// like in linkedin UI is rendered first then data is rendered so it takes time to get information from server 
componentDidMount() {
    console.log('sum mounted');
}

//COMPONENTWILLUNMOUNT WORKS WHEN COMPONENT IS REMOVED FROM SCREEN
componentWillUnMount() {
    console.log('unmounted');
}

//COMPONENTDIDUPDATE WORKS WHENEVER THE VALUE IS UPDATED
componentDidUpdate() {
    console.log('knajj');
}


//------CLASS COMPONENTS--------
class App extends Component {
    render() {
        return <h1>HELLO</h1>;
    }
}
export default App;


this.setstate is a function which will not be updated 

*/

// ASSIGNMENT   

/*-------------------SAMPLE CODE FOR ASSIGNMENT------------------------
let tasks = [
    { 
        number: 1, 
        taskName: 'Somewhere',
        taskdesc: 'description
    },
    { 
        number: 2, 
        taskName: 'ewhere',
        taskdesc: 'ption
    },

];
*/

/*

REATE 2 REACT COMPONENT 
1- ALLTASKSCREEN
    you have to fetch all tasks and show on the screen 
    every task has delete button , when clicked , the task gets deleted 
    when gets deleted then print - console.log('got deleted') using componentDidUpdate

2- TASK 
show the task based upon their task number 
*/
//------------------------------------------------------------------------------------------------
/* 
        FUNCTIONAL COMPONENT

TO USE POWER OF LIFE CYCLE IN FUNCTIONAL COM. we use HOOKS 

useEffect
useState
*/


// C9 TELLS HOW TO CHANGE VALUE IN FORMS 
/*
handleChange = (e)=>{
    this.setState({...this.state , [e.target.name]:Number(e.target.value)})
}


<Input
value={this.state.firstNumber}
onChange={this.handleChange}
/>

*/