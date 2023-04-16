class Department {
    name: string;
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name
    }

    describe(this: Department) {
        console.log(this.name)
    }

    addEmployee (name: string) {
        this.employees.push(name)
    }
}

const accounting = new Department('Gabriel')
accounting.addEmployee('Júnior')