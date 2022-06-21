//BUILDING URL used by web browsers 

/*
const url = require('url');
const myUrl = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(myUrl);
*/

/*
const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(myURL);
console.log(myURL.href);
*/

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL.href);

//url.hash
//url.hostname
//url.href
//url.origin
//url.password
//url.port

import url from ('url');
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL.href);