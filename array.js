// rest parameter
// const add=(...numbers:[number,number,number,number])=>{
// or can use lyk anotherway
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 35, 98, 5.6);
console.log(addedNumbers);
// object destructuring
var hobby1 = ['drawing', 'cricket'];
var hobby2 = ['cooking', 'planting', 'social activies'];
hobby2.push.apply(hobby2, hobby1);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remaninghobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
