const userName = 'Gab'
let age = 10

const add = (a: number, b: number = 2)  => a + b;

const printOutPut = (output: number) => console.log(output);

printOutPut( add(5) );