import { match } from 'assert';
import { createServer} from 'http';
import { nextTick } from 'process';
const PORT= process.env.PORT;

const users = [
        {id:1, name:'Chetan Shimpi'},
        {id:2, name:'Chetan'},
        {id:3, name:'Shimpi Chetan'}
]

const server =  createServer((req,res)=>{

        //Logger Middleware
        const jsonMiddleWare = (req,res,next) =>{
            res.setHeader('Content-Type','application/json')
            next()
        }

        //Route Handler for GET /api/user

        const getUserHandler = (req,res) =>{
            const id = req.url.split('/')[3];
            const user = users.find((user)=> user.id === parseInt(id)); 
            if(user){
                res.setHeader('Content-Type','application/json')
                res.write(JSON.stringify(user));
                res.end()
            }else{
                res.setHeader('Content-Type','application/json')
                res.statusCode = 404
                res.write(JSON.stringify({message : 'User not found'}));
                res.end();
            }

        }

        //Route Handler for POST
        const createUserHandler = (req,res) =>{
            let body = '';

            req.on('data',(chunk)=>{
                body+= chunk.toString(); 
            });
            req.on('end',() =>{
                const newUser = JSON.parse(body)
                users.push(newUser);
                res.statusCode=201;
               res.write(JSON.stringify()) 
               res.end()
            })

        }


        if(req.url === '/api/users' && req.method === 'GET'){
            res.setHeader('Content-Type','application/json')
            res.write(JSON.stringify(users));
            res.end()
        }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
            const id = req.url.split('/')[3];
            const user = users.find((user)=> user.id === parseInt(id));
            if(user){
                res.setHeader('Content-Type','application/json')
                res.write(JSON.stringify(user));
                res.end()
            }else if(req.url === '/api/users' && req.method === 'POST'){    
                    createUserHandler(req,res)


            }else{
                res.setHeader('Content-Type','application/json')
                res.statusCode = 404
                res.write(JSON.stringify({message : 'User not found'}));
                res.end()


            }
        }
})

server.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
 })