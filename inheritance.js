var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Departmentt = /** @class */ (function () {
    function Departmentt(id, name) {
        this.id = id;
        this.name = name;
        // private employees:string[]=[]; 
        this.employees = [];
    }
    Departmentt.prototype.describe = function () {
        console.log("Department (".concat(this.id, "):").concat(this.name));
    };
    Departmentt.prototype.addEmploye = function (employee) {
        this.employees.push(employee);
    };
    Departmentt.prototype.printEmployee = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Departmentt;
}());
var ITDepart = /** @class */ (function (_super) {
    __extends(ITDepart, _super);
    function ITDepart(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepart;
}(Departmentt));
var AccountingDep = /** @class */ (function (_super) {
    __extends(AccountingDep, _super);
    function AccountingDep(id, roles) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.roles = roles;
        return _this;
    }
    AccountingDep.prototype.addEmploye = function (name) {
        if (name === 'maruth') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDep.prototype.addRole = function (text) {
        this.roles.push(text);
    };
    AccountingDep.prototype.printRole = function () {
        console.log(this.roles);
    };
    return AccountingDep;
}(Departmentt));
var it = new ITDepart('1', ['hello world']);
it.addEmploye('Malar');
it.addEmploye('Nisha');
it.describe();
it.name = 'paxel';
it.printEmployee();
console.log(it);
var level = new AccountingDep('2', []);
level.addRole('something curious');
account.addEmploye('dharun');
account.addEmploye('dhashin');
account.addEmploye('pari');
level.printRole();
account.printEmployee();
