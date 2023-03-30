const userName = 'Gab'
let age = 10

const add = (a: number, b: number = 2)  => a + b;

const printOutPut = (output: number) => console.log(output);

printOutPut( add(5) );

const hobbies = ['0', '1', '2', '3']
const activeHobbies = ['5', ...hobbies]

console.log(hobbies)

const person = {
    name: 'Gab',
    age: 25
};

//New object copied in memory
const copiedPerson = {...person};

