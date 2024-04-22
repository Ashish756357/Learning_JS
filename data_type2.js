// No the basic of accesing data the datatype is divided into 2 types 
// 1) Primitive 
// 2) Non-primitive


// Primitive
// 7 Types:

// string 
// Number
// Boolearn
// null
// undefined
// Symbol
// BigInt

// Example:
// const Score = 100 or const Score = 100
   const ScoreValue = 100.4 
   const isLoggedIn = false
// let userEmail = undefined; or let userEmail;
const id = Symbol('123')
const newId = Symbol('123')

console.log(id)
// Symbol(123)

console.log(newId)
// Symbol(123)

console.log(id === newId)
// False

// const bignumber = 24625665462746566736472567436576437n;




// Non-primitive or Rederence 

// Array , Objects, Functions 



// Arrays 
const heros = ["Shaktiman" , "Iron Man", "Hulk"];


let myobj = {
  name: "Ashish",
  age: 21,
}


const myfunction = function(){
  console.log("Hello World");
}
  
