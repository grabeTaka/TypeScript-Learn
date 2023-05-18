//intersection type

type Admin = {
    name: string;
    privilages: string[];
}

type Employee = {
    namme: string;
    startDate: Date
}

type elevatedEmployee = Admin & Employee