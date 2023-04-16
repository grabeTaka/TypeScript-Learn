interface Person {
    name: string;
    age: number;

    greet(value: string): void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 11,
    greet(value: 'oi') {
        console.log(value);
    }
}
