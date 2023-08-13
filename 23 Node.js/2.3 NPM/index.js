//const generateName = require("sillyname")
import generateName from "sillyname" 
import superheroes from "superheroes"

var sillyname = generateName()

console.log(`My name is ${sillyname}`)
console.log(`I love ${superheroes.random()}`)

// cjs: commonjs 
// const generateName = require("sillyname")


// esm: ECMA script modules --> add type: module to package.json
// import generateName from "sillyname" 
