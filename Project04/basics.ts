enum Access { OWNDER = 0, ADMIN = 1, USER = 2};

const customer: {
    name: string, 
    age: number, 
    hobbies: string[], 
    role: [number, string], 
    access: number
} = {
    name: 'Gabriel',
    age: 30,
    hobbies: ['Sports', 'Futball'],
    role: [2, 'two'],
    access: Access.ADMIN
}