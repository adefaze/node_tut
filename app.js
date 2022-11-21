const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// customEmitter.on(('response',(name,id)=>{
//     console.log(`data received user ${name},with id ${id}`);

// )}


// customer

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name}, ${id}`);

})

customEmitter.emit('response', 'john', 566)