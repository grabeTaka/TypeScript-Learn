class Department {
    protected name: string;
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

class ITDepartment extends Department{
    constructor(name: string, public admins: string[]) {
        super(name)
    }

    get printName() {
        return this.name
    }

    set saveName(value: string) {
        this.name = value
    }

}

const itDepartment = new ITDepartment('Gabriel', ['adm1'])
itDepartment.saveName = 'teste'
const accounting = new Department('Gabriel')
accounting.addEmployee('Júnior')    