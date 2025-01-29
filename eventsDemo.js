import {EventEmitter} from 'events';


const myEmitter = new EventEmitter()

function greetHandler(){
     console.log('Hello world');
}

function goodByHandler(){
    console.log('goodby handler')
}

//register event listeners
myEmitter.on('greet',greetHandler)
myEmitter.on('goodby',goodByHandler);

//emit events
myEmitter.emit('greet');
myEmitter.emit('goodby');