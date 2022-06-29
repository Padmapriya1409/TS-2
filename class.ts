class Department{
    // name:string;
    // employees:string[]=[];

    // public name:string;  js dooesn't know private and public
     private employees:string[]=[];  

    // constructor(n:string ){
        // this.name=n
        // this.id=id   or may can write
    constructor(private readonly id:string,public name:string){  
    }

    // describe(){
        describe(this:Department){
        // console.log('Department:'+this.name)
        console.log(`Department (${this.id}):${this.name}`)
    }

    addEmploye(employee:string){
        // validation
        this.employees.push(employee)
    }

    // another method
    printEmployee(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const account= new Department('1','hello world')

account.addEmploye('Malar')
account.addEmploye('Nisha')

// account.employees[3] ='Maxi','Paru'

account.describe();
account.name='paxel'
account.printEmployee();

// const accountCopy={describe:account.describe}
// const accountCopy={name:'DUMM DUMMY',describe:account.describe}

// accountCopy.describe()
// console.log(account)