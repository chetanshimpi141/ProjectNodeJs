import crypto from 'crypto';

const hash= crypto.createHash('shah256');
hash.update('password1234');
console.log(hash.digest('hex'))