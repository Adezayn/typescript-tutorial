const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});


const isAge= function (age: number){
return age;
}

isAge(60);

// ARRAYS

// single typed arrays
const singleNumberArray = [20, 88, 199, 45];
//singleNumberArray.push('ade');   error
singleNumberArray.push(20);
//singleNumberArray.push(true); error

const singleBooleanArray = [true, false, true, true];
// singleBooleanArray.push('joy'); error
singleBooleanArray.push(false);


// mixed typed arrays
const mixedArrays = ['Joy', 20, 'Peace', 13];
mixedArrays.push('Dolapo');
mixedArrays.push(89);
//mixedArrays.push(true); error

let mixedArrays2 = [true, 20, 13, 22];
//mixedArrays2.push('Ade'); error
mixedArrays2[0] = 5;
console.log(mixedArrays2)
mixedArrays2.push(false);
console.log(mixedArrays2);


//reassigining variable
mixedArrays2 = [80, 90, 67];
mixedArrays2 = [true, 60, false];
//mixedArrays2 = ['letter', 60, false]; error
mixedArrays2 = [true, false, true];



//OBJECTS
const object1 = {
  name: 'Happiness',
  isABoy: true,
  age: 25
}

let object2 = {
  name: 'Anderline',
  isABoy: false,
  age: 22
}

object2 = {
  name: 'King',
  isABoy: true,
  age: 40
  // skills: `['dance', 'run']`
}

// object2[skills] = ['dance', 'run'];