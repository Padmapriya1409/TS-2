class Departmentt{

    private employees:string[]=[];  

    constructor(private readonly id:string,public name:string){  
    }
    describe(this:Departmentt){
        console.log(`Department (${this.id}):${this.name}`)
    }

    addEmploye(employee:string){
        this.employees.push(employee)
    }

    printEmployee(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepart extends Departmentt{
    admins:string[];
    constructor(id:string,admins:string[]){
        super(id,'IT')
        this.admins=admins;
    }
}

class AccountingDep extends Departmentt{
    constructor(id:string,private roles:string[]){
        super(id,'IT')
    }

addRole(text:string){
    this.roles.push(text);
}
printRole(){
    console.log(this.roles)
}
}
const it= new ITDepart('1',['hello world'])

it.addEmploye('Malar')
it.addEmploye('Nisha')


it.describe();
it.name='paxel'
it.printEmployee();


console.log(it)

const level = new AccountingDep('2',[])

level.addRole('something curious')
level.printRole();

