//First decorator

function Logger() {
    return function (constructor: Function) {
        console.log('logging...');
        console.log(constructor);
    }
    
}

@Logger()
class Person {
    name = 'Gabriel'

    constructor()  {
        console.log('Creating person Object');
    }
}

const pers = new Person();