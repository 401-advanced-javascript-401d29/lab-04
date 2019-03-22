'use strict';

const fs = require('fs');

//TODO make an array of three names... using later so commented out
// const names = ['bert', 'ernie', 'oscar'];

//TODO Use forEach to console.log the three names to the console once the file is created
//Found out from Lorin that you can create an array that looks like a string using graves
// that prints multi line text... this is so cool!
const codeToWrite = `\'use strict\';
    const names = ['bert', 'ernie', 'oscar'];
    const logNames = function(array) {
        return array.forEach(name => console.log(name));
    }
    logNames(names);
`;
console.log(codeToWrite);
//TODO Create a buffer and allocate appropriate amount of space
const buffer = Buffer.alloc(codeToWrite.length);
console.log(buffer);

//TODO Split the array into individual characters and write them to the buffer
// Because each character has to be written to the buffer individually. Cannot send entire
// array at the same time.
const writeBuffer = function(array) {
  const split = array.split('');
  for(let i = 0; i < split.length; i++){
    // buffer.write(string, offset) takes in the string and then the offset. If offset is
    // not incremented each newly added character will overwrite the previous character.
    // buffer.write also can take in length and encoding. If nothing is specified these
    // default to buffer.length-offset and utf8 for encoding. This is why you don't have
    // to use charCodeAt().
    buffer.write(split[i], i);
  }
  return buffer;
};

//TODO Write a function that creates a file using fs and writes code to that file. Need to give the function the file path and file name, the buffer, and instructions on what to do with an error.
fs.writeFile('./files/loop.js', writeBuffer(codeToWrite), (err) => {
  if (err) console.log(err);
  console.log('I wrote code!');
});

