import url from 'url';

const urlString =  'https://www.google.com/search?q=hello';

//URL Constructor

const urlObj= new URL(urlString);
console.log(urlObj)

//format()

console.log(url.format(urlObj))

//import.meta.url - file path
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url))

