class Department{
    name:string;
    constructor(n:string){
        this.name=n
    }

    // describe(){
        describe(this:Department){
        console.log('Department:'+this.name)
    }
}

const account= new Department('hello world')
account.describe();
// const accountCopy={describe:account.describe}
const accountCopy={name:'DUMM DUMMY',describe:account.describe}

accountCopy.describe()
console.log(account)