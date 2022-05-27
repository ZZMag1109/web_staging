/**
 * util.promisefy 方法
 */
// 引入util模块
const util = require('util');
// 引入fs模块
const fs = require('fs');
// 返回一个新的函数，且该函数的返回值为一个promise对象
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/content.txt').then((value) => {
    console.log(value.toString());
});

