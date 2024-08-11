// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-name');
const sayHi= require('./5-utils');
const data= require('./6-alternative-flavor')

require('./7-mind-granade')
console.log(data)
sayHi('SUSAN')
sayHi(names.john)
sayHi(names.peter) 

//const secret= 'SUPER SECRET'
//const john= 'John'
//const peter= 'Peter'