/* NODE JS SERVER */
/* STEPS
1.import required modules 
2. HOLD APPLICATION IN ONE THING LIKE - WEATHER APPLICATION INSIDE homeFile here 
3. CREATE SERVER FOR REDIRECTING AND ACTIONS ON
4. LISTEN TO SERVER (port , hostname)

5. inside creater server -> send api and collect data , pass data as an array , thhen from there we can take value to update 

*/


const http = require('http');
const fs = require('fs');
const requests = require('postman-request');



const homeFile = fs.readFileSync("home.html" , "utf-8" ); 
//got my whole weather application inside homeFile

// console.log(homeFile.date);
//replaceValue functions - homepage variable and api value - pass information
const replaceValue = (tempval , apival) => {
    let temperature = tempval.replace("{%temp%}",apival.main.temp);    
    temperature = temperature.replace("{%tempmax}",apival.main.tempmax);
    temperature = temperature.replace("{%tempmin}",apival.main.tempmin);
    temperature = temperature.replace("{%location%}",apival.main.location);
    temperature = temperature.replace("{%country%}}",apival.main.country);

    //first hold homepage value in temperature (tempval) then change its value (temperature) by api value ( apival )


}


const server = http.createServer((req,res) => {
    // console.log(req.url);
    // res.statusCode=200;
    // res.setHeader('Content-Type', 'application/json');
    if(req.url == '/') {   
        // res.sendFile("home.html");                         //ROUTING
       
        // fetch('api.openweathermap.org/data/2.5/weather?q=284003&appid=edf046aefa6b8206ef3852c6678d5803')
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        requests(
            "api.openweathermap.org/data/2.5/weather?q=284003&appid=edf046aefa6b8206ef3852c6678d5803"
        )
        .on('data', (chunk)=>{                      // get data - save in json form - frame as array of data - then use 
             const objdata = JSON.parse(chunk);
             const data = [objdata];
            //  console.log(data[0]); 
            const realTimeData = data.map((value) => {      //replace html data with api data 
                // console.log(value);
                replaceValue(homeFile , value);             //returning value but as array , after join + "" + it becomes string
            }).join("");
            res.write(realTimeData);
            // console.log(realTimeData);
        })
        .on('end', (err) => {
            if(err) return console.log("finished")});
    }

    if(req.url='/form.html', (req, res) => {
        console.log(req.JSON);
    });
});

server.listen(8000,'localhost',() => {
    console.log("server running at http://localhost:8000/");
});

// SERVER CONNECTING REQUIRED