class Department {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    describe(this: Department) {
        console.log(this.name)
    }
}

const accounting = new Department('Gabriel')
const accountingCopy = {name: 'teste', describe: accounting.describe}
accountingCopy.describe();