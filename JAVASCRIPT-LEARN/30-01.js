/*
-------------------USEREF HOOK --------------------------------
ref is used for reference purpose 
hooks used inside functional component

ref is used in react to point to something like this:
getElementById in HTML

REF IN CLASS COMPONENT 

constructor(props){
    super(props);
    this.signupFormRef = Recat.createRef();
}



render(){
    return (
        <>
        <h1 ref={this.signupFormRef}
        value=...   
        onChange = .... 
        >
    )
}

<ButtonComponent ref={ref}>TEST BUTTON</ButtonComponent>                       // ref={ref}>TEST BUTTON = is props.children , whatever is passed btwn Component is children 

const ButtonComponent = React.forwardRef((props,ref)=>{
    <button ref={ref} onClick={(e)=> console.log(props)}>{props.children}</button>
})})



//FUNCTIONAL COMPONENT USEREF 

const ref = useRef(null);
return (
    <ButtonComponent ref={ref}>TEST BUTTON</ButtonComponent>  
);
const ButtonComponent = React.forwardRef((props,ref)=>{
    <button ref={ref} onClick={(e)=> console.log(props)}>{props.children}</button>
})})



-------HOOKS-------------------
const [name , SetName] = useState();



//
============================= ASSIGNMENT =============================================================
ADMINISTRATOR - ECOMM. WEBSITE 

ADD PRODUCT ... 
name , desc. qty , price
on submit click  -(reduce discount , apply gst ) - show payable value 

*/




//==========================================
/*    
1) useState -> it is used to set the value on work , new variable count with initial value 0 ( can be changed) and useCounter used to change it's value 
    import {useState} from 'react';

    const [counter , useCounter] = useState(0);

    inside fucntion......{
        setCounter(counter+1);
    };

2) useReducer  ->  acts like switch case over useState HOOK


    const reducer = (state , action ) =>{
        switch(action.type) {
            case "INCREMENT":
                return {count: state.count+1 , toggleShowText: state.showText };
            case "toggleShowText":
                return {count: state.count , toggleShowText: !state.showText };
                default : return state;
        }
    }

    <button onClick={()=?{
        dispatch({type : 'INCREMENT'});
        dispatch({type: 'toggleShowText'});
    }};
    />

3) useEffect - is used data fetching and all similar tasks , eg. componentDidMount() , componentWillMount() , componentDidUpdate

    */
// LOGIN PAGE USING HOOKS 
/*
import { isValidUser } from "../validator";
...

const Signup = () => {
    const [state , setState ] = useState({
        firstname = "",
        lastName = "",
        email = "",
        passsword = ""
    });

    const [error , setError ]  = useState();

    let handleChange= (e) => {
        setState({
            ...state , [e.target.name]:e.target.value 
        });
    }

    return (
        <form 
        onSubmit = {(e)=> {
            e.preventDefault();
            if(!isValidUser({...state})){
                setError("invalid user");
            }
        }}
    )
}
*/