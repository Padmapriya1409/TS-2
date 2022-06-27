var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    // describe(){
    Department.prototype.describe = function () {
        console.log('Department:' + this.name);
    };
    return Department;
}());
var account = new Department('hello world');
account.describe();
// const accountCopy={describe:account.describe}
var accountCopy = { name: 'DUMM DUMMY', describe: account.describe };
accountCopy.describe();
console.log(account);
