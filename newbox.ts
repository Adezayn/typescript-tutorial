// UNION TYPES IN FUNCTION

// giving the parameter of a function union types
function testingUnionType(variable: string|number){
    return typeof variable;
};
//console.log(testingUnionType(true)) error
console.log(testingUnionType(50));
console.log(testingUnionType('Ade'));

// what is returned in the function determines the type of its value which can also include "function" type.
function testing1(){
     return 10;
}
//The argument value is a number type based on the returned value from the function argument.
console.log(testingUnionType(testing1()));

function testing2a(){
  let testvalue = () => 10;
  return testvalue;
//    return testvalue()
}
//The argument value is a function type based on the returned value from the function argument.
// console.log(testingUnionType(testing2a())); error

function testing2b(){
    let testvalue = () => console.log('testing');
    return testvalue();
  }
//The argument value is a void type based on the returned value from the function argument.
//console.log(testingUnionType(testing2b())); error

function testing3(){
    let testvalue = () => 10;
    return testvalue();
  }
  //The argument value is a number type based on the returned value from the inner called function in the returned value of the function argument.
   console.log(testingUnionType(testing3()));


//    explicit type: Arrays
    let arrayMixed: (string|boolean)[] = [];
    arrayMixed.push('Qay');
    arrayMixed.push(false);
    // arrayMixed.push(12); error
    console.log(arrayMixed);
    console.log(typeof arrayMixed, '---array from union types---');

   //EXPLICIT TYPE: object type
   let myInfo: object;
   myInfo = {
    name: 'Dolapo',
    age: 23,
    isGirl: true
   };
   console.log(typeof myInfo)
   myInfo = ['Dolapo', 23, true];
   console.log(typeof myInfo,  '---array from object type---')

//  EXPLICIT TYPE: strictly for Objects.
let info: {
    name: string,
    age: number,
    isGirl: boolean
};
// info = {
//     name: 'Joy'
// } error

info = {
    name: 'Kate',
    age: 12,
    isGirl: true
}
