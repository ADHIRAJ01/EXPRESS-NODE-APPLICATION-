const os = require('os');

//console.log(os.cpus()); //CPU CORE INFORMATION
//console.log(os.freemem()/1024/1024);      //FREE MEMORY AVAILABLE
//console.log(os.homedir());      //HOMEDIRECTORY
//console.log(os.hostname());       //HOSTNAME -COMPUTER HERE
//console.log(os.networkInterfaces());            //NETWORK INFO
//console.log(os.tmpdir());
//console.log(os.uptime());
console.log(os.userInfo());
console.log(os.version());