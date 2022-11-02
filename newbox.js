var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var isAge = function (age) {
    return age;
};
isAge(60);
// ARRAYS
// single typed arrays
var singleNumberArray = [20, 88, 199, 45];
//singleNumberArray.push('ade');   error
singleNumberArray.push(20);
//singleNumberArray.push(true); error
var singleBooleanArray = [true, false, true, true];
// singleBooleanArray.push('joy'); error
singleBooleanArray.push(false);
// mixed typed arrays
var mixedArrays = ['Joy', 20, 'Peace', 13];
mixedArrays.push('Dolapo');
mixedArrays.push(89);
//mixedArrays.push(true); error
var mixedArrays2 = [true, 20, 13, 22];
//mixedArrays2.push('Ade'); error
mixedArrays2[0] = 5;
console.log(mixedArrays2);
mixedArrays2.push(false);
console.log(mixedArrays2);
