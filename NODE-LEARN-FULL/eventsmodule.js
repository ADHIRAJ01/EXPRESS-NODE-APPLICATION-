//EVENTS ARE IMPORTANT AS WHENEVER ANYTHING IS TRIGEERED OR EVENT HAPPENS THEN IT IS USED

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();

myEmitter.on('event', function(a, b) {                  //on event name event it works
  console.log(a, b, this, this === myEmitter);
});

myEmitter.on('cook', (a)=> {                            //on event cook event it works
    console.log(`PLEASE COOK ${a} or  SOMETHING `);
  });

  myEmitter.on('WATERFALL', (a)=>{                       //on event WATERFALL event it works
    console.log(`PLEASE CLOSE THE TAP ${a} or  TURN OFF TAP `);
   setInterval(() => {
       console.log("CLOSE IT PPLEASE");
   }, 1000);
   setTimeout(() => {
       console.log("TEN");
   }, 1000);
  });


myEmitter.emit('event', 'a', 'b');                  //here we are calling fuctions
myEmitter.emit('cook','apple');
myEmitter.emit('WATERFALL','tap');