abstract class Department {
    protected name: string;
    private employees: string[] = [];
    static fiscalYear = 2023

    constructor(name: string) {
        this.name = name
    }

    abstract describe(this: Department): void 

    addEmployee (name: string) {
        this.employees.push(name)
    }
}

class ITDepartment extends Department {
    constructor(name: string, public admins: string[]) {
        super(name)
    }

    get printName() {
        return this.name
    }

    set saveName(value: string) {
        this.name = value
    }

    static createEmployee (name: string) {
        return {name: name}
    }

    describe () {
        console.log(this.name)
    }
}

ITDepartment.createEmployee('Gabriel')
console.log(ITDepartment.fiscalYear)

const itDepartment = new ITDepartment('Gabriel', ['adm1'])
itDepartment.saveName = 'teste'