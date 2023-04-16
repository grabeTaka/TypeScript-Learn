//type AddFn = (a: number) => number;

interface AddFn {
    (a: number): number;
}

let add: AddFn;

add = (a: number) => {
    return a;
}

interface Named {
    readonly name: string;

}
interface Greetable extends Named {
    greet(value: string): void;
}

class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    
    greet(this: Person) {
        console.log(this.name)
    }
}

let user1 = new Person('Gabriel');