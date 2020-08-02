const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.google.com');

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('------------------------------');

const parsedUrl = url.parse('http://www.google.com');

console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));