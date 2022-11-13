

// local
const secret = "SUPER SECRET"

//share
const john = "John"
const peter = "Peter"

// console.log(module);

module.exports = { john , peter }



// Modules
const {john , peter} = require('./modules')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
require('./addition')

sayHi("Susan")
sayHi(john)
sayHi(peter)


// console.log(data);



