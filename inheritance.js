"use strict";
class Departmentt {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}):${this.name}`);
    }
    addEmploye(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepart extends Departmentt {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDep extends Departmentt {
    constructor(id, roles) {
        super(id, 'IT');
        this.roles = roles;
    }
    addRole(text) {
        this.roles.push(text);
    }
    printRole() {
        console.log(this.roles);
    }
}
const it = new ITDepart('1', ['hello world']);
it.addEmploye('Malar');
it.addEmploye('Nisha');
it.describe();
it.name = 'paxel';
it.printEmployee();
console.log(it);
const level = new AccountingDep('2', []);
level.addRole('something curious');
level.printRole();
