// interface adding function
var addd;
addd = function (n1, n2) {
    return n1 * n2;
};
console.log(addd(98, 86));
// class Great implements Person,Level{ can add this lyk too
var Great = /** @class */ (function () {
    // constructor(n:string){
    // this.name=n}
    function Great(n) {
        this.age = 12;
        if (n) {
            this.name = n;
        }
    }
    // greet(phrase:string){
    //     console.log(phrase+''+this.name)
    // }
    Great.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + '' + this.name);
        }
        else {
            console.log("hello...something is wrong");
        }
    };
    return Great;
}());
var user1;
user1 = new Great('maxi');
// user1={
//     name:'Padhu',
//     age:22,
//     greet(phrase:string){
//         console.log(phrase+''+this.name)}
// }
user1.greet('Hello word..How are you?..');
user1.name;
user1.age;
console.log(user1);
