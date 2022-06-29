"use strict";
class Department {
    // constructor(n:string ){
    // this.name=n
    // this.id=id   or may can write
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name:string;
        // employees:string[]=[];
        // public name:string;  js dooesn't know private and public
        this.employees = [];
    }
    // describe(){
    describe() {
        // console.log('Department:'+this.name)
        console.log(`Department (${this.id}):${this.name}`);
    }
    addEmploye(employee) {
        // validation
        this.employees.push(employee);
    }
    // another method
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const account = new Department('1', 'hello world');
account.addEmploye('Malar');
account.addEmploye('Nisha');
// account.employees[3] ='Maxi','Paru'
account.describe();
account.name = 'paxel';
account.printEmployee();
// const accountCopy={describe:account.describe}
// const accountCopy={name:'DUMM DUMMY',describe:account.describe}
// accountCopy.describe()
// console.log(account)
