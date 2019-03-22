'use strict';

const fs = require('fs');
const readline = require('readline');
// const util = require('util'); - Will need a promise later

//Readline module reads from a stream rather than bufferring the whole file in memory

// let iswear = util.promisify(fs.) - Part of the promise needed later

let readStuff = readline.createInterface({
  input: fs.createReadStream('files/pair-programming.txt'),
  output: null,
});
let stringArray = [];

readStuff.on('line', (info) => {
  stringArray.push(info);
  stringArray.join(' ');
  // console.log(stringArray.length);

  

  // let lineToWrite = fs.appendFile('./files/pair-programming.js', info, (err) => {
  //   if (err) console.log(err);
  // });

  

});

console.log(stringArray, 'this is a thing');



// const buffer = Buffer.alloc(info);
//   console.log(buffer);