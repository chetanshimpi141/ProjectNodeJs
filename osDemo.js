import os, { totalmem } from 'os';

//userinfo
console.log(os.userInfo().username)

//totalmem()
console.log(os.totalmem())

//Freemem()
console.log(os.freemem())

//cPu
console.log(os.cpus())