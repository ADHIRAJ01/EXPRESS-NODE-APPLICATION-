fetch('api.openweathermap.org/data/2.5/weather?q=284003&appid=edf046aefa6b8206ef3852c6678d5803')
    .then(res => res.json())        //response convert in json format
    .then(data => console.log(data))
    .catch(err => console.log("ERROR"));       //catch if error 

// ============================================================================
//SEND , GET , UPDATE DATA API FETCH
fetch('<url>' , {   //optional
    method : 'POST',
    headers : {
        "Content-Type": "application/json"
    },
    body : JSON.stringify({
        name: 'user1'
    })
})
    .then(res => {
        if(res.ok) {
            console.log("success"); 
        }
        else {
            console.log("error");
        }
    })