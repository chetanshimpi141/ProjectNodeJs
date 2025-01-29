import fs from 'fs'
import fs from 'fs/promises'

// readFile() -  callback

// fs.readFile('./test.txt','utf-8',(err,data) =>{

//     if(err) throw err;
//     console.log(data);
// });


//readFileSync() - synchronous version

// const data= fs.readFileSync('./test.txt','utf-8');
// console.log(data)


//readFile() -promise.then()

// fs.readFile('./text/txt','utf-8')
//     .then((data)=>console.log(data))
//     .catch((err)=> console.log(err));

const readFile = async () =>{
    try{
        const data= fs.readFileSync('./test.txt','utf-8');
         console.log(data)
    }catch(error){
        console.log(error)
    }
}


// const writeFile = async() =>{
//     try{
//         await fs.writeFile('./test.txt','HELLO I AM WRITING TO THIS FILE');
//         console.log     
//     }
// }