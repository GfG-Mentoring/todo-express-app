// C:\Users\Shikhar singh\Downloads
// /home/shikhar/Downloads

const path = require('path');

const fs = require('fs');

const fullpath = '/home/shikhar/Documents/gfg/nodejs/index.js';

const fileToRead = path.join(__dirname, 'readme.txt');

const fileToWriteIn = path.join(__dirname, 'out.txt');

// fs.readFile(fileToRead, { encoding: 'utf-8' }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   fs.writeFile(fileToWriteIn, data, (err) => {
//     if (err) throw err;
//     console.log('write complete');
//   });
// });

// const data = fs.readFileSync(fileToRead, { encoding: 'utf-8' });

// console.log('got data: ', data.length);
// console.log('now writing to file: ', fileToWriteIn);

// fs.writeFileSync(fileToWriteIn, data);

// console.log(fs.existsSync(fileToRead));

// const copyPaste = (fileToCopy) => {
//   //  1. check if file exists
//   if (fs.existsSync(fileToCopy)) {
//     // 2. read data from the file
//     const dataToCopy = fs.readFileSync(fileToCopy, { encoding: 'utf-8' });
//     // 3. create new file name with any number
//     let filename = path.basename(fileToCopy);
//     filename = filename.split('.')[0];
//     const newFile = filename + '-1' + path.extname(fileToCopy);
//     // 4. write to the new file

//     fs.writeFileSync(path.join(path.dirname(fileToCopy), newFile), dataToCopy);
//   } else {
//     throw new Error('file doesnt exist.');
//   }
// };

// copyPaste('/home/shikhar/Documents/gfg/nodejs/out.txt');

// const listFiles = (folderName) => {
//   const files = fs.readdirSync(folderName);
//   files.forEach((fileOrFolder) => {
//     if (path.extname(fileOrFolder)) {
//       console.log('\n 📝 ' + fileOrFolder);
//     } else {
//       console.log('\n 📁' + fileOrFolder);
//     }
//   });
//   console.log(path.extname(folderName));
// };

// listFiles(__dirname);

// fs.unlink('/home/shikhar/Documents/gfg/nodejs/test/randomfile.txt', () => {
//   console.log('file deleted');
// });
