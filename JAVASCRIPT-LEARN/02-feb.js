/* ROUTING 

react routing
REACT -ROUTER -DOM
*/

/*
BROWSERROUTE - 
ROUTES
ROUTE - 
LINK - like creating navigation list    
NAVIGATE - navigation from one url to other url
OUTLET - where to render the element
USEPARAMS -helps to render with path with parameter geting that data 
NavLink - (same as Link) - adding coloring to link 

ELEMENT = where you want to redirect it to 
*/


//APIs
/*
PARAMETERS 
www.abc.com/contact?name=Adhiraj
url
after ? = parameter
return Axios.post("http://localhost:8080/product/search?type=R")
or
retrn Axios.post("http://localhost:8080/product/search",name , {
    headers:{
        "Content-Type": "application/json"
    },
    params: {
        type="R"
    }
})

const productSearch = (name) =>{
return Axios.post("http://localhost:8080/product/search?type=R&age=20&name=Adhiraj", name , {
    headers:{
        "Content-Type": "application/json"
    }
}

TAKES 3 VALUES - URL , REQUEST BODY , CONFIGURATION
})                          name            headers ...
*/