// interface adding function

// type AddFunc = (a:number,b:number)=>number  or

interface AddFunc{
    (a:number,b:number):number
}

let addd:AddFunc;

addd= (n1:number,n2:number)=>{
    return n1 * n2;
}

console.log(addd(98,86))
// extending functions
interface Level{
    readonly name?:string
    outputName?:string
}

interface Person extends Level{
    greet(phrase:string):void
}

// type Person={
interface Person{
//  readonly name:string;   can use readonly doesn't use public and private
    name?:string;
    // name:string;
    age:number;

    greet(phrase:string):void
}
// class Great implements Person,Level{ can add this lyk too

class Great implements Person{
    name: string;
    age=12;

    // constructor(n:string){
        // this.name=n}
        constructor(n?:string){
            if(n){
            this.name=n
    }
        }
    // greet(phrase:string){
    //     console.log(phrase+''+this.name)
    // }

    greet(phrase:string){
    if (this.name) {
        console.log(phrase+''+this.name)
    } else {
       console.log("hello...something is wrong") 
    }        
    }
}

let user1:Person;

user1 = new Great('maxi')

// user1={
//     name:'Padhu',
//     age:22,
//     greet(phrase:string){
//         console.log(phrase+''+this.name)}
// }
user1.greet('Hello word..How are you?..')
user1.name
user1.age
console.log(user1)

