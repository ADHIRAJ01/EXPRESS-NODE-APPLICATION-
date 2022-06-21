//SCSS , SASS , LESS 
/*  
    h1.span { 
        font-size:
    }
    =========below is scss and upper is css============
    h1 {
        .span { 
            font-size;
        }
    }
*/
//------------------------------------------------------------------------------------------------
//ROUTING

/*
IN HTML WE DO WITH THE RELP OF routing 

IN REACT  WE USE REACT-ROUTER FOR RENDERING 
install react router using npm 

npm i react-router-dom

BROWSER ROUTER  - 
HASH ROUTER -
//this way routing is done 

<a href={'/about'}>About</a>    // for routing but not prefered for react


import { Browserrouter , Route , Routes } from 'react-router'

<link to='/about'>ABOUT</Link>

<Browserrouter>
    <Routes>
        <Route path={'/'} element = {<h1>hello</h1>});
        <Route path={'/home'} element = {<div>hello</div>});
    </Routes>
</Browserrouter>
//----------------------------------

Instead of using 
<a href="/"></a>

WE SHOULD USE LINK
import { Link } from "react-router-dom";

<nav>
    <Link to={"/"}>HOME</Link>
    <Link to={"/about"}>ABOUT </Link>
</nav>

*/

//NESTEDROUTING
<Routes>
<Route path={'/about'} element={<Component />} >
    <Route path={"one"} element={<ComponentOne />} />
    <Route path={"faq"} element={<h1> IT WILL RETURN ON PGE /about/faq </h1>} />
</Route>
<Route path={"*"} element={<h1>ERROR</h1>}/>
</Routes>

// WRITE OUTLET ON THAT COMPONENT PAGE WHERE YOU WANT TO RENDER SUB PART 