// rest parameter

// const add=(...numbers:[number,number,number,number])=>{
// or can use lyk anotherway
const add=(...numbers:number[])=>{
   return numbers.reduce((curResult,curValue)=>{
        return curResult+curValue
    },0);
}

const addedNumbers=add(5,35,98,5.6);
console.log(addedNumbers)

// object destructuring

// const hobby1=['drawing','cricket']
// const hobby2=['cooking','planting','social activies']

// hobby2.push(...hobby1)
// const[hobby,hobby1,...hobby2]=hobbies
// console.log(hobbies,hobby1,hobby,hobby2)

